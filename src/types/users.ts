export interface IUser {
  items: User[];
  total_count: number;
}

export interface User {
  id: number;
  avatar_url: string;
  name: string;
  html_url: string;
  blog?: string;
  followers?: number;
  following?: number;
  created_at?: number;
  hireable?: boolean;
  login: string;
  liked?: boolean;
}
