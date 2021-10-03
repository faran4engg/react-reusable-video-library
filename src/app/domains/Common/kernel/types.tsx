export type DropdownNames = 'category' | 'tags' | 'speakerName';
type OtherInputNames =
  | 'url'
  | 'title'
  | 'uploadedBy'
  | 'description'
  | 'additionalInfo'
  | 'videoLanguage';

type FeedbackInputNames = 'name' | 'email' | 'suggestions' | 'moreDetails';

export interface FormField {
  type: string;
  defaultValue: string | null;
  name: DropdownNames | OtherInputNames;
  placeholder?: string;
  label: string;
  isMulti?: boolean;
  isClearable?: boolean;
  rules: {
    required: boolean;
  };
}

export interface FeedbackFormField {
  type: string;
  defaultValue: string | null;
  name: FeedbackInputNames;
  placeholder?: string;
  label: string;
  rules: {
    required: boolean;
  };
}

export type SelectBoxFieldType = {
  value: string;
  label: string;
  __isNew__?: boolean;
};

export type SelectBoxWithNoNewField = Omit<SelectBoxFieldType, '__isNew__'>;
export interface IUploadVideoFormValues {
  additionalInfo: string;
  category: SelectBoxWithNoNewField;
  description: string;
  speakerName: SelectBoxWithNoNewField;
  tags: SelectBoxFieldType[];
  title: string;
  uploadedBy: string;
  url: string;
  videoLanguage: string;
}

export interface UploadVideoFormValuesToDB
  extends Omit<IUploadVideoFormValues, 'tags' | 'category' | 'speakerName'> {
  tags: string[];
  category: string;
  speakerName: string;
  timestamp: number;
  videoIdToDelete?: string;
}
