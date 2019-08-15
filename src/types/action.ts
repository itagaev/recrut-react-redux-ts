import { IUser, User } from "./users";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USER = "FETCH_USER";

export const LOADING = "LOADING";
export const LOADED = "LOADED";

export interface fetchUsers {
    type: typeof FETCH_USERS,
    payload: IUser
}

export interface fetchUser {
    type: typeof FETCH_USER,
    payload: User
}

export interface loading {
    type: typeof LOADING
}

export interface loaded {
    type: typeof LOADED
}

export type fetchUserTypes = fetchUsers | fetchUser;
export type loadingTypes = loading | loaded;

export type AppActions = fetchUserTypes | loadingTypes;
