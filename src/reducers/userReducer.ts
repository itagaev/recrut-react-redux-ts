import { User } from "../types/users";
import { fetchUser } from "../types/action";

const defaultUserState: User = {
    id: 0,
    avatar_url: "",
    html_url: "",
    name: "",
    login: ""
};

export default (state = defaultUserState, action: fetchUser): User => {
    switch(action.type){
        case "FETCH_USER":
            return action.payload;
        default:
            return state;    
    }
}