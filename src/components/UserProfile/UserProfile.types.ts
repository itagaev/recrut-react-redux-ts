import { RouteComponentProps } from "react-router";
import { PickStates } from "../../store/State";
import { PickActionCreators, actionCreators } from "../../store/models/action-creators";

interface routeInfo {
    id: string
}

export type routeProps = RouteComponentProps<routeInfo>;


export type UserProfileDispatchProps = PickActionCreators<"fetchUser">;

export const UPMapDispatchToProps: UserProfileDispatchProps = {
    fetchUser: actionCreators.fetchUser
}

export type UserProfileStateProps = PickStates<"user" | 'loading'>;

export type UserProfileProps = routeProps & UserProfileDispatchProps & UserProfileStateProps;