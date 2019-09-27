import { actionCreators } from './../../store/models/action-creators';
import { PickStates } from "../../store/State";

export type HomeDispatchProps = {
  fetchUsers: (city: string, skill: string, page: number) => void;
};

export const HomeMapDispatchToProps: HomeDispatchProps = {
    fetchUsers: actionCreators.fetchUsers
}

export type HomeStateProps = PickStates<"users" | "loading">;

export type HProps = {
  searchSkill: string;
  searchCity: string;
  currentPage: number;
  [key: string]: any;
}

export type HomeProps = HomeDispatchProps & HomeStateProps & HProps;