import { ReactNode, ChangeEvent } from 'react';
type InputType = 'text' | 'email' | 'password' | 'number';
type AutoCompleteType = 'on' | 'off';

export interface InputProps {
  name?: string;
  id?: string;
  value?: string;
  list?: string;
  type?: InputType;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyUp?: () => void;
  autocomplete?: AutoCompleteType;
  maxLength?: number;
  className?: string;
  placeholder?: string;
  readonly?: boolean;
  icon?: ReactNode;
  withIcon?: boolean;
}
