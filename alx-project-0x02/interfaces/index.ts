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

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UsersPageProps {
  posts: UserProps[];
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
