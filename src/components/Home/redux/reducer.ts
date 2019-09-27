import { Reducer } from 'redux';
import { fetchUsersAction } from './action';
import { fetchUsersState } from './state';
import { Users } from './../../../types/users';


export const users: Reducer<fetchUsersState['users'], fetchUsersAction> = (state = new Users(), {type, users}) => {
    switch(type){
        case "FETCH_USERS":
            return users;
        default:
            return state;
    }
}
