import { Action } from "../../../store/models/action-types";
import { User } from "../../../types/users";

export type fetchUserAction = Action<"FETCH_USER", { user: User }>;
export type fetchingAction = Action<"LOADING" | "LOADED">;

export const fetchUser = (user: User): fetchUserAction => ({
  type: "FETCH_USER",
  user
});

export const loading = (): fetchingAction => ({
  type: "LOADING",
});

export const loaded = (): fetchingAction => ({
  type: "LOADED",
});