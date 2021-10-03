import { useEffect, useState, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import Captcha from 'react-numeric-captcha';
import { feedbackFormFields } from 'app/domains/Common/kernel/feedbackFormFields';
import { useSendFeedback } from 'app/hooks/queries-hooks/index';
import { VideoFormSubmitLoader } from 'app/domains/Common/components/loader';
import { FeedBackFormProps } from './types';
import {
  composeValidators,
  nonEmpty,
  required,
  emailValidation,
} from 'app/domains/Common/kernel/validators';
import {
  Button,
  Input,
  Label,
  TextArea,
} from 'app/domains/Common/components/Forms';
import '../../kernel/captcha.css';

const FeedBackForm: React.FC<FeedBackFormProps> = ({
  setShowModalOnSuccess,
}) => {
  const captchaInputRef = useRef(null);
  const [showLoader, setShowLoader] = useState(false);
  const { mutateAsync, isSuccess } = useSendFeedback();
  const [isValidCaptcha, setIsValidCaptch] = useState(false);

  const onSubmit = async values => {
    setShowLoader(true);
    mutateAsync(values);
    // @ts-ignore
    captchaInputRef.current?.refresh();
    setIsValidCaptch(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setShowModalOnSuccess(true);
      setShowLoader(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  return (
    <div className="relative text-gray-600 dark:text-gray-400">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            {feedbackFormFields.map(({ type, name, label, placeholder }) => (
              <Field
                key={name}
                name={name}
                validate={
                  type === 'input' || type === 'textArea'
                    ? composeValidators(required, nonEmpty)
                    : type === 'email'
                    ? composeValidators(required, nonEmpty, emailValidation)
                    : required
                }
              >
                {({ input, meta }) => (
                  <div className="mb-3">
                    <Label htmlFor={name}>{label}</Label>
                    {(type === 'input' || type === 'email') && (
                      <Input
                        {...input}
                        autocomplete="off"
                        type="text"
                        placeholder={placeholder}
                      />
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
            ))}
            <Captcha
              ref={captchaInputRef}
              onChange={status => {
                setIsValidCaptch(status);
              }}
            />
            <Button
              disabled={submitting || pristine || !isValidCaptcha}
              className="mt-2"
              type="submit"
            >
              Submit
            </Button>
            {showLoader && <VideoFormSubmitLoader />}
            <Button
              disabled={pristine || submitting}
              onClick={() => {
                form.reset();
                // @ts-ignore
                captchaInputRef.current?.refresh();
              }}
              type="reset"
              className="mt-2 ml-4"
            >
              Reset
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default FeedBackForm;
