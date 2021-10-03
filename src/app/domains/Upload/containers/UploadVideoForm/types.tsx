import { ReactNode } from 'react';
import {
  SelectBoxFieldType,
  SelectBoxWithNoNewField,
  UploadVideoFormValuesToDB,
} from 'app/domains/Common/kernel/types';

interface ChildrenProps {
  onSubmit: (formData: UploadVideoFormValuesToDB) => void;
  isUploadSuccess: boolean;
  allCategories: SelectBoxWithNoNewField | null;
  allTags: SelectBoxFieldType | null;
  allSpeakerNames: SelectBoxWithNoNewField | null;
}

export interface OwnProps {}
export interface RenderProps {
  children: (props: ChildrenProps) => ReactNode;
}
