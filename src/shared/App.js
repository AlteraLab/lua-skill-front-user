import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import {REPO_NAME} from '../constants';
import { MdLocalGasStation } from 'react-icons/md';

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
<<<<<<< HEAD

=======
>>>>>>> 9382bedd945c7d9bbbae442e8de49f3139135aa5
          <Route path="/add" component={HubAddPage} />
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
