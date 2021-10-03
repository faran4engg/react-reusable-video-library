import { ReactNode } from 'react';

export interface LabelProps {
  children: ReactNode;
  className?: string;
  id?: string;
  htmlFor: string;
}
