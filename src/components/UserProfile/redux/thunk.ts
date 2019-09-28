import { Dispatch } from "redux";
import { User } from "./state";
import githubAPI from "../../../apis/githubAPI";
import { fetchUserActionCreator } from "./action";

export const fetchUser = (id: number) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({ type: "LOADING" });

  const { data: user }: { data: User } = await githubAPI.get(`user/${id}`);

  dispatch(fetchUserActionCreator(user));

  dispatch({ type: "LOADED" });
};
