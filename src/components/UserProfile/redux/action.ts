import { Action } from "../../../store/models/action-types";
import { User } from "./state";

export type fetchUserAction = Action<"FETCH_USER", { user: User }>;
export type fetchingAction = Action<"LOADING" | "LOADED">;

export const fetchUserActionCreator = (user: User): fetchUserAction => ({
  type: "FETCH_USER",
  user
});

export const loading = (): fetchingAction => ({
  type: "LOADING"
});

export const loaded = (): fetchingAction => ({
  type: "LOADED"
});
