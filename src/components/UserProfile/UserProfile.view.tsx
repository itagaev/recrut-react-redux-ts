import { UserProfileCtrl } from "./UserProfile.ctrl";
import * as React from "react";
import {
  UserProfileStateProps,
  UserProfileDispatchProps,
  UPMapDispatchToProps
} from "./UserProfile.types";
import { connect } from "react-redux";
import { State } from "../../store/State";
import Loading from "../Loading";

export const UserProfile = connect<
  UserProfileStateProps,
  UserProfileDispatchProps,
  {},
  State
>(
  ({ user, loading }) => ({ user, loading }),
  UPMapDispatchToProps
)(
  class extends UserProfileCtrl {
    render() {
      const { user, loading } = this.props;

      return (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <img src={user.avatar_url} alt="User Avatar" />
              <h5> {user.name}</h5>
              <pre>
                <a
                  href={`${user.html_url}?tab=repositories`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  Repositories
                </a>
                <a href={user.html_url}> Github Page </a>
                <a href={user.blog}> Blog </a>
                <a href={`${user.html_url}?tab=followers`}>Followers:</a>
                {user.followers} <br />
                <a href={`${user.html_url}?tab=following`}>Following:</a>
                {user.following} <br />
                Registered: {user.created_at} <br />
                Hireable: {user.hireable ? "Yes" : "No"}
              </pre>
              <button
                className="btn btn-primary m-2"
                onClick={this.handleBackClick}
              >
                Back
              </button>
            </div>
          )}
        </div>
      );
    }
  }
);
