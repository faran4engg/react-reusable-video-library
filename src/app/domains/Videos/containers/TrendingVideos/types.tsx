import { ReactNode } from 'react';
interface Video {
  description: string;
  id: string;
  language: string;
  speakerName: string;
  tags: string[];
  timestamp: number;
  title: string;
  uploadedBy: string;
  url: string;
}

interface ChildrenProps {
  isLoading: boolean;
  videos?: Video[];
}

export interface OwnProps {}
export interface RenderProps {
  children: (props: ChildrenProps) => ReactNode;
}
