import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HubBox } from '../components';
import {
  Welcome,
  MainPage,
  HubAddPage,
  HubAdminPage,
  NotFound,
  OAuth2RedirectHandler
} from 'pages';
import { PrivateRoute } from 'components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './App.css';

const DynamicRoute = ({ match }) => {
  return(<Route
    path={`${match.url}/:id`}
    component={HubAdminPage} />
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <PrivateRoute path="/main" 
          isAutenticated = { this.props.isAutenticated }
          component={Main} /> */}
          <Route path="/main" component={MainPage} />

          <Route path="/hub/add" component={HubAddPage} />
          <Route path="/huba" component={DynamicRoute} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  //subscribe redux store
  connect(
    state => ({
      isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
    })
  )(App)
);
