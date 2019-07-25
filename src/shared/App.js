import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Welcome,
  MainPage,
  HubAddPage,
  DevAddPage,
  HubLogPage,
  HubAdminPage,
  DevInfoPage,
  NotFound,
  FriendAddPage,
  HubSettingPage,
  OAuth2RedirectHandler
} from 'pages';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './App.css';

const DynamicRoute = ({ match, location }) => {
  //location state가 존재하고 허브의 관리자 id와 hub의 user id가 일치한다면
  if (location.state && location.state.hubInfo.adminId === location.state.userInfo.userId) {
    console.log('ok!')
    return (<Route
      path={`${match.url}/:id`}
      component={HubAdminPage} />
    )
  }
  else {
    console.log('false!')
    return <Route component={NotFound} />
  }
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
          <Route path="/add" component={HubAddPage} />
          <Route path="/set" component={HubSettingPage} />
          <Route path="/dadd" component={DevAddPage} />
          <Route path="/devInfo" component={DevInfoPage} />
          <Route path="/friadd" component={FriendAddPage} />
          <Route path="/log" component={HubLogPage} />
          <Route path="/hub" component={DynamicRoute} />
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
