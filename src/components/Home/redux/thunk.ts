import { Users } from "./state";
import githubAPI from "../../../apis/githubAPI";
import { fetchUsersActionCreator } from "./action";
import { Dispatch } from "redux";

export const fetchUsers = (city: string, skill: string, page: number) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({ type: "LOADING" });

  const { data }: { data: Users } = await githubAPI.get(
    `/search/users?&q=location:${city}+language:${skill}&page=${page}`
  );

  dispatch(fetchUsersActionCreator(data));

  dispatch({ type: "LOADED" });
};
