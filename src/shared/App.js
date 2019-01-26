import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Welcome, Main, NotFound, OAuth2RedirectHandler } from 'pages';
import { PrivateRoute } from 'components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <PrivateRoute path="/main" 
          isAutenticated = { this.props.isAutenticated }
          component={Main} /> */}
          <Route path="/main" component={Main} />
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
          isAuthenticated: state.auth.getIn(['userState','isAuthenticated']),
      })
  )(App)
);
