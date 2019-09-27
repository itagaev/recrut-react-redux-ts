import * as React from "react";
import { UsersCtrl } from "./Users.ctrl";
import { Link } from "react-router-dom";

export class Users extends UsersCtrl {
  render() {
    const { users, loading } = this.props;
    return (
      <>
        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {!loading &&
          users.items &&
          users.items.length > 0 &&
          users.items.map(user => {
            return (
              <div key={user.id} className="flex-container card m-2">
                <div className="card-header" style={{ cursor: "pointer" }}>
                  <Link to={`/users/${user.id}`}>Login: {user.login} </Link>
                  <i
                    className={
                      user.liked
                        ? "fa fa-bookmark fa-2x"
                        : "fa fa-bookmark-o fa-2x"
                    }
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="card-body">
                  <div className="flex-element-1">
                    <img
                      src={user.avatar_url}
                      height="100px"
                      width="100px"
                      alt="Avatar"
                    />
                  </div>
                  <div className="flex-element-2">
                    <pre>
                      <a
                        href={`${user.html_url}?tab=repositories`}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Repositories
                      </a>
                      <a href={user.html_url}> Github Page </a> <br />
                    </pre>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  }
}
