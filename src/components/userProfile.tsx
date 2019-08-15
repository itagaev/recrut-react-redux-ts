import * as React from "react";
import { User } from "../types/users";
import { connect } from "react-redux";
import { AppState } from "../store/configureStore";
import { AppActions } from "../types/action";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { fetchUser } from "../actions";
import { RouteComponentProps } from "react-router";

interface RouteInfo{
    id: string
}

interface compProps extends RouteComponentProps<RouteInfo>{};

type Props = LinkDispatchProps & LinkStateProps & compProps;

class UserProfile extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchUser(+this.props.match.params.id);
    }

    handleClick = () => {
        this.props.history.push("/users");
    };

    render() { 
        const { user, loading } = this.props;
        console.log(user, loading);
        return ( 
            <div>
            {loading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            {!loading && (
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
                  type="submit"
                  className="btn btn-primary m-2"
                  onClick={this.handleClick}
                >
                  Back
                </button>
              </div>
            )}
          </div>
         );
    }
}

interface LinkStateProps {
  user: User;
  loading: boolean;
}

interface LinkDispatchProps {
  fetchUser: (id: number) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    user: state.user,
    loading: state.loading
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
  return {
    fetchUser: bindActionCreators(fetchUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
