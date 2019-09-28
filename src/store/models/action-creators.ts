import { loading, loaded } from "../../components/UserProfile/redux/action";
import { fetchUser } from "./../../components/UserProfile/redux/thunk";
import { fetchUsers } from "../../components/Home/redux/thunk";

export const actionCreators = {
  fetchUser,
  fetchUsers,
  loading,
  loaded
};

export type AllActionCreators = typeof actionCreators;

export type PickActionCreators<AC extends keyof AllActionCreators> = {
  [K in Extract<AC, keyof AllActionCreators>]: AllActionCreators[K];
};
