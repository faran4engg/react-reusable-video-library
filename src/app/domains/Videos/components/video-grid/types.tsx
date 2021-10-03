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

export interface VideoGridProps {
  isLoading: boolean;
  videos?: Video[];
}
