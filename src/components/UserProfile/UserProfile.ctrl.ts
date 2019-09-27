import * as React from "react";
import {
  UserProfileProps,
} from "./UserProfile.types";


export class UserProfileCtrl extends React.Component<UserProfileProps> {
  async componentDidMount() {
    this.props.fetchUser(+this.props.match.params.id);
  }
  

  handleClick = () => {
    this.props.history.push("/users");
  };
}
