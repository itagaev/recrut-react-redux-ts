import { User } from "../../UserProfile/redux/state";

export interface UsersState {
  users: Users;
  loading: boolean;
}

export class Users {
  items: User[] = [];
  total_count: number = 0;
}
