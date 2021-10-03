import { FormField } from './types';

export const formFields: FormField[] = [
  {
    type: 'input',
    defaultValue: '',
    name: 'url',
    placeholder: 'e.g. https://www.youtube.com/watch?v=8Yk7Vo16fP4',
    label: 'URL',
    rules: {
      required: true,
    },
  },
  {
    type: 'input',
    defaultValue: '',
    name: 'title',
    placeholder: 'e.g. Virtues of Ramadan',
    label: 'Title',
    rules: {
      required: true,
    },
  },
  {
    type: 'select',
    defaultValue: null,
    name: 'category',
    label: 'Category',
    isMulti: false,
    isClearable: true,
    rules: {
      required: true,
    },
  },
  {
    type: 'select',
    defaultValue: null,
    name: 'speakerName',
    label: 'Speaker Name',
    isMulti: false,
    isClearable: true,
    rules: {
      required: true,
    },
  },
  {
    type: 'input',
    defaultValue: '',
    name: 'uploadedBy',
    placeholder: 'Enter your Name',
    label: 'Your Name',
    rules: {
      required: true,
    },
  },
  {
    type: 'select',
    defaultValue: null,
    name: 'tags',
    label: 'Tags',
    isMulti: true,
    isClearable: false,
    rules: {
      required: true,
    },
  },

  {
    type: 'textArea',
    defaultValue: '',
    name: 'description',
    placeholder: 'Enter Video Description',
    label: 'Description',
    rules: {
      required: true,
    },
  },
  {
    type: 'input',
    defaultValue: '',
    name: 'additionalInfo',
    placeholder: 'Add keywords / Note for reviewers',
    label: 'Additional Info',
    rules: {
      required: true,
    },
  },
  {
    type: 'radio',
    defaultValue: '',
    name: 'videoLanguage',
    label: 'Video Language',
    rules: {
      required: true,
    },
  },
];

export const resetFormFields = {
  url: '',
  title: '',
  uploadedBy: '',
  description: '',
  additionalInfo: '',
  videoLanguage: '',
  speakerName: '',
  category: '',
  tags: null,
};
