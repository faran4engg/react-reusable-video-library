import {
  DropdownNames,
  SelectBoxFieldType,
  UploadVideoFormValuesToDB,
} from 'app/domains/Common/kernel/types';

const siteNameCommonTag = 'islaamify360';
const commonTags = ['islam', 'muslim', 'allah', 'muhammad', 'peace'];

export const getTagsBeforeUpload = (
  tagsArr: SelectBoxFieldType[],
  vdoLang: string,
) => [
  // @ts-ignore
  ...new Set(
    [siteNameCommonTag].concat(
      tagsArr
        ?.map(tag => tag.value.toLowerCase().trim())
        .concat(vdoLang, commonTags),
    ),
  ),
];

export const getDropdownValues = (metadata): SelectBoxFieldType[] =>
  Object.keys(metadata || []).map(key => ({
    label: key,
    value: key,
  }));

export const getDropdownDefaultValues = (
  options,
  fieldName,
): SelectBoxFieldType[] | SelectBoxFieldType => {
  switch (fieldName) {
    case 'tags': {
      return options.map(tag => ({
        label: tag,
        value: tag,
      }));
    }
    case 'speakerName':
    case 'category': {
      return {
        label: options,
        value: options,
      };
    }
    default: {
      return {
        label: options,
        value: options,
      };
    }
  }
};

export const getFormDataBeforeSubmit = (
  formData,
): UploadVideoFormValuesToDB => ({
  ...formData,
  tags: getTagsBeforeUpload(formData.tags, formData.videoLanguage),
  category: formData.category.value.toLowerCase().trim(),
  speakerName: formData.speakerName.value.toLowerCase().trim(),
  timestamp: new Date().getTime(),
});

export const getAdminFormDataBeforeSubmit = (
  formData,
): UploadVideoFormValuesToDB => ({
  ...formData,
  tags: getTagsBeforeUpload(formData.tags, formData.videoLanguage),
  category: formData.category.toLowerCase().trim(),
  speakerName: formData.speakerName.toLowerCase().trim(),
  timestamp: new Date().getTime(),
});

export const getOptionsFromDB = (
  dropdownName: DropdownNames,
  optionsFromDb,
) => {
  switch (dropdownName) {
    case 'category':
      return getDropdownValues(optionsFromDb[dropdownName]);

    case 'tags':
      return getDropdownValues(optionsFromDb[dropdownName]);

    case 'speakerName':
      return getDropdownValues(optionsFromDb[dropdownName]);

    default:
      return [];
  }
};
