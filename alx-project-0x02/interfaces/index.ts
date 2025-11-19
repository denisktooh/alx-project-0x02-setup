export interface CardProps {
    title: string,
    content: string
}

export interface HomeProps {
  posts: CardProps[];
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (data: CardProps) => void;
}

export interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
  userId: number;
  id?: number;
  title: string;
  content: string;
}

export interface PostComponentsProps {
  posts: PostProps[];
}

export interface PostsModalProps {
  onClose: () => void;
  onSubmit: (data: PostProps) => void;
}
