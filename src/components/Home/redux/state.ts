import { Users } from './../../../types/users';

export class fetchUsersState {
    public users: Users = new Users();
    public loading: boolean = false;
}
