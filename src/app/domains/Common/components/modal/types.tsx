import { ReactNode } from 'react';

export interface ModalProps {
  showModal: (flag: boolean) => void;
  children: ReactNode;
  isFeedbackForm?: boolean;
}
