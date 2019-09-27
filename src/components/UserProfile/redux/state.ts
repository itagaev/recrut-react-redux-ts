import { User } from "../../../types/users";

export class fetchUserState {
    public user: User = new User();
    public loading: boolean = false;
}