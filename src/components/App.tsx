import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import Home from './home';
import UserProfile from './userProfile';

const App: React.FC = () => {
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

export default App;
