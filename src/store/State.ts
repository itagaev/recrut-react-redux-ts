import { UserProfileState } from "./../components/UserProfile/redux/state";
import { UsersState } from "./../components/Home/redux/state";

export type State = UserProfileState & UsersState;

export type PickStates<T extends keyof State> = {
  [K in Extract<T, keyof State>]: State[K];
};
