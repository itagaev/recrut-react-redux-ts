import { Reducer } from "redux";
import { fetchUserAction, fetchingAction } from "./action";
import { UserProfileState } from "./state";
import { User } from "./state";

export const user: Reducer<UserProfileState["user"], fetchUserAction> = (
  state = new User(),
  { type, user }
) => {
  return type === "FETCH_USER" ? user : state;
};

export const loading: Reducer<UserProfileState["loading"], fetchingAction> = (
  state = false,
  { type }
) => {
  switch (type) {
    case "LOADING":
      return true;
    case "LOADED":
      return false;
    default:
      return state;
  }
};
