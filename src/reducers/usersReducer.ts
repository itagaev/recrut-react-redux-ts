import { fetchUserTypes } from '../types/action';
import { IUser } from './../types/users';

const defaultUsersState: IUser = {
    items: [],
    total_count: 0
};

export default (state = defaultUsersState, action: fetchUserTypes ): IUser => {
    switch(action.type){
        case "FETCH_USERS":
            return action.payload;
        default: 
            return state;
    }
}