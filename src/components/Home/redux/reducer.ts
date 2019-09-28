import { Reducer } from "redux";
import { fetchUsersAction } from "./action";
import { UsersState } from "./state";
import { Users } from "./state";

export const users: Reducer<UsersState["users"], fetchUsersAction> = (
  state = new Users(),
  { type, users }
) => {
  return type === "FETCH_USERS" ? users : state;
};
