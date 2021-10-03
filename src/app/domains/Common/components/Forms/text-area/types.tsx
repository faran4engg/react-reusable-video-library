import { ChangeEvent } from 'react';

export interface TextAreaProps {
  name?: string;
  defaultValue?: string;
  id?: string;
  value?: string;
  className?: string;
  placeHolder?: string;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  rows?: number;
  cols?: number;
}
