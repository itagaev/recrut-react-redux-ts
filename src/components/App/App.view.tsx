import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfile } from "./../UserProfile/";
import { Home } from "../Home";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <Switch>
                <Route exact path="/users/:id" component={UserProfile} />
                <Route path="/users" component={Home} />
                <Redirect from="/" to="/users" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
