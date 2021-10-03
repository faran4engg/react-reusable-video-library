import {
  SelectBoxWithNoNewField,
  SelectBoxFieldType,
  UploadVideoFormValuesToDB,
} from 'app/domains/Common/kernel/types';

export interface VideoFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedVideo?: any;
  isAdminFlow?: boolean;
  onSubmit: (formData: UploadVideoFormValuesToDB) => void;
  onReject?: (id: string) => void;
  allCategories: SelectBoxWithNoNewField | null;
  allTags: SelectBoxFieldType | null;
  allSpeakerNames: SelectBoxWithNoNewField | null;
}
