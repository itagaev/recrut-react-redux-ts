import * as React from "react";
import {
  UserProfileProps,
} from "./UserProfile.types";

import { User } from "../../types/users";
import githubAPI from "../../apis/githubAPI";

export class UserProfileCtrl extends React.Component<UserProfileProps> {
  async componentDidMount() {
    const { data: user }: { data: User } = await githubAPI.get(
      `user/${+this.props.match.params.id}`
    );
    this.props.fetchUser(user);
  }

  handleClick = () => {
    this.props.history.push("/users");
  };
}
