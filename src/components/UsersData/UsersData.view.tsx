import * as React from "react";
import Loading from "../Loading";
import UserItem from "../UserItem";
import { UsersDataProps } from "./UsersData.types";

export class UsersData extends React.Component<UsersDataProps> {
  render() {
    const { users, loading } = this.props;

    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          users.items &&
          users.items.length > 0 &&
          users.items.map(user => {
            return <UserItem user={user} />;
          })
        )}
      </>
    );
  }
}
