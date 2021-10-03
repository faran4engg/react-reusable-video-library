import { FC, useRef, useState } from 'react';
import { Form, Field } from 'react-final-form';
import Captcha from 'react-numeric-captcha';

import { formFields } from 'app/domains/Common/kernel/formFields';
import { getOptionsFromDB } from 'utils/formUtils';
import { DropdownNames } from 'app/domains/Common/kernel/types';
import {
  Button,
  DropDown,
  Input,
  Label,
  RadioButton,
  TextArea,
} from '../Forms';
import '../../kernel/captcha.css';
import { VideoFormProps } from './types';
import {
  composeValidators,
  nonEmpty,
  required,
} from 'app/domains/Common/kernel/validators';

const VideoForm: FC<VideoFormProps> = ({ selectedVideo, ...props }) => {
  const captchaInputRef = useRef(null);
  const [isValidCaptcha, setIsValidCaptch] = useState(false);

  const onSubmit = async values => {
    await props.onSubmit({ ...values, videoIdToDelete: selectedVideo?.id });
    // @ts-ignore
    captchaInputRef.current?.refresh();
    setIsValidCaptch(false);
  };

  return (
    <div className="relative text-gray-600 dark:text-gray-400">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            {formFields.map(
              ({ type, name, label, placeholder, isClearable, isMulti }) => (
                <Field
                  key={name}
                  name={name}
                  validate={
                    type === 'input' || type === 'textArea'
                      ? composeValidators(required, nonEmpty)
                      : required
                  }
                  defaultValue={selectedVideo?.[name]}
                >
                  {({ input, meta }) => (
                    <div className="mb-3">
                      <Label htmlFor={name}>{label}</Label>
                      {type === 'input' && (
                        <Input
                          {...input}
                          autocomplete="off"
                          type="text"
                          placeholder={placeholder}
                        />
                      )}
                      {type === 'select' && (
                        <DropDown
                          {...input}
                          onChange={input.onChange}
                          options={getOptionsFromDB(name as DropdownNames, {
                            category: props.allCategories,
                            tags: props.allTags,
                            speakerName: props.allSpeakerNames,
                          })}
                          isClearable={isClearable}
                          isMulti={isMulti}
                        />
                      )}
                      {type === 'radio' && (
                        <div className="flex">
                          {['urdu', 'english'].map(lang => (
                            <RadioButton
                              {...input}
                              key={lang}
                              value={lang}
                              checked={lang === input.value}
                              name="videoLanguage"
                              text={lang.toUpperCase()}
                            />
                          ))}
                        </div>
                      )}
                      {type === 'textArea' && (
                        <TextArea
                          {...input}
                          rows={4}
                          placeHolder={placeholder}
                        ></TextArea>
                      )}
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              ),
            )}
            {!selectedVideo && (
              <Captcha
                ref={captchaInputRef}
                onChange={status => {
                  setIsValidCaptch(status);
                }}
              />
            )}
            <Button
              disabled={submitting || (!selectedVideo && !isValidCaptcha)}
              className="mt-2"
              type="submit"
            >
              {props.isAdminFlow ? 'Approve' : 'Submit'}
            </Button>
            {props.isAdminFlow ? (
              <Button
                disabled={pristine || submitting}
                onClick={() => {
                  const videoIdToDelete = selectedVideo?.id;
                  props.onReject && props.onReject(videoIdToDelete);
                }}
                type="reset"
                className="mt-2 ml-4"
              >
                Delete
              </Button>
            ) : (
              <Button
                disabled={pristine || submitting}
                onClick={() => {
                  // @ts-ignore
                  captchaInputRef.current?.refresh();
                  form.reset();
                }}
                type="reset"
                className="mt-2 ml-4"
              >
                Reset
              </Button>
            )}
          </form>
        )}
      />
    </div>
  );
};

export default VideoForm;
