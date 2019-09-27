import { Reducer } from 'redux';
import { fetchUserAction, fetchingAction } from './action';
import { fetchUserState } from './state';
import { User } from '../../../types/users';

export const user: Reducer<fetchUserState['user'], fetchUserAction> = (state = new User(), {type, user}) => {
    switch(type){
        case 'FETCH_USER':
            return user;
        default:
            return state;
    }
}

export const loading: Reducer<fetchUserState['loading'], fetchingAction> = (state = false, {type}) => {
   switch(type){
       case "LOADING":
           return true;
       case "LOADED":
           return false;
       default:
           return state;
   }
}

