import {
  AppActions,
  FETCH_USERS,
  LOADING,
  LOADED,
  FETCH_USER
} from "../types/action";
import githubAPI from "../apis/githubAPI";
import { AppState } from "../store/configureStore";
import { Dispatch } from "redux";
import { IUser, User } from "../types/users";

export const fetchUsers = (
  searchCity: string,
  searchSkill: string,
  currentPage: number
) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  dispatch({ type: LOADING });
  const { data }: { data: IUser } = await githubAPI.get(
    `/search/users?&q=location:${searchCity}+language:${searchSkill}&page=${currentPage}`
  );

  dispatch({ type: FETCH_USERS, payload: data });

  dispatch({ type: LOADED });
  localStorage.setItem("searchCity", searchCity);
  localStorage.setItem("searchSkill", searchSkill);
  localStorage.setItem("currentPage", currentPage.toString());
};

export const fetchUser = (id: number) => async (
  dispatch: Dispatch<AppActions>
) => {
  dispatch({ type: LOADING });

  const { data }: { data: User } = await githubAPI.get(`user/${id}`);

  dispatch({ type: FETCH_USER, payload: data });

  dispatch({ type: LOADED });
};
