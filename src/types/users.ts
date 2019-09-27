export class Users {
  items: User[] = [];
  total_count: number = 0;
}

export class User {
  id: number = -1;
  avatar_url: string = "";
  name: string = "";
  html_url: string = "";
  blog?: string;
  followers?: number;
  following?: number;
  created_at?: number;
  hireable?: boolean;
  login: string = "";
  liked?: boolean;
};