import {
  SelectBoxWithNoNewField,
  SelectBoxFieldType,
  UploadVideoFormValuesToDB,
} from 'app/domains/Common/kernel/types';

export interface UserUploadFormProps {
  onSubmit: (formData: UploadVideoFormValuesToDB) => void;
  isUploadSuccess: boolean;
  allCategories: SelectBoxWithNoNewField | null;
  allTags: SelectBoxFieldType | null;
  allSpeakerNames: SelectBoxWithNoNewField | null;
}
