import * as React from "react";
import { UserProfileProps } from "./UserProfile.types";

export class UserProfileCtrl extends React.Component<UserProfileProps> {
  componentDidMount() {
    this.props.fetchUser(+this.props.match.params.id);
  }

  handleBackClick = () => {
    this.props.history.push("/users");
  };
}
