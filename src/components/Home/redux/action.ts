import { Action } from '../../../store/models/action-types';
import { Users } from './../../../types/users';

export type fetchUsersAction = Action<"FETCH_USERS", { users: Users}>;

export const fetchUsers = (users: Users): fetchUsersAction => ({
    type: "FETCH_USERS",
    users
});