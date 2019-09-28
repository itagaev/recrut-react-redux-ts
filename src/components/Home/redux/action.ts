import { Action } from "../../../store/models/action-types";
import { Users } from "./state";

export type fetchUsersAction = Action<"FETCH_USERS", { users: Users }>;

export const fetchUsersActionCreator = (users: Users): fetchUsersAction => ({
  type: "FETCH_USERS",
  users
});
