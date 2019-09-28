import { combineReducers } from "redux";
import { State } from "./State";
import { users } from "./../components/Home/redux/reducer";
import { user, loading } from "./../components/UserProfile/redux/reducer";

export const rootReducer = combineReducers<State>({
  users,
  user,
  loading
});
