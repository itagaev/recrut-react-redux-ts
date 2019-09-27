import { fetchUserState } from './../components/UserProfile/redux/state';
import { fetchUsersState } from './../components/Home/redux/state';

export type State = fetchUserState & fetchUsersState;

export type PickStates<T extends keyof State> = {
    [K in Extract<T, keyof State>]: State[K];
}