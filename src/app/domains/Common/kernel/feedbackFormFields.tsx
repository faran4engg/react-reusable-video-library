import { FeedbackFormField } from './types';

export const feedbackFormFields: FeedbackFormField[] = [
  {
    type: 'input',
    defaultValue: '',
    name: 'name',
    placeholder: 'e.g: Jaree Kazmi',
    label: 'Your Name:',
    rules: {
      required: true,
    },
  },
  {
    type: 'email',
    defaultValue: '',
    name: 'email',
    placeholder: 'e.g: jaree.kaazmi@gmail.com',
    label: 'Your Email:',
    rules: {
      required: true,
    },
  },
  {
    type: 'input',
    defaultValue: '',
    name: 'suggestions',
    placeholder: 'e.g: suggestion about Videos for Kids',
    label: 'Feedback About:',
    rules: {
      required: true,
    },
  },
  {
    type: 'textArea',
    defaultValue: '',
    name: 'moreDetails',
    placeholder: 'e.g: more details...',
    label: 'Description:',
    rules: {
      required: true,
    },
  },
];
