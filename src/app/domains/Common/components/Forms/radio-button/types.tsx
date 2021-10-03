import { ChangeEvent } from 'react';
export interface RadioButtonProps {
  text: string;
  className?: string;
  name?: string;
  id?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  checked?: boolean;
}
