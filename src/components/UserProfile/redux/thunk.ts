import { Dispatch } from "redux";
import { User } from "../../../types/users";
import githubAPI from "../../../apis/githubAPI";
import { fetchUser as fu } from './action';

export const fetchUser = (id: number) => async (
  dispatch: Dispatch
): Promise<void> => {
    dispatch({type: "LOADING"});

    const { data: user }: { data: User } = await githubAPI.get(
        `user/${id}`
    );

    dispatch(fu(user));

    dispatch({type: "LOADED"});
};
