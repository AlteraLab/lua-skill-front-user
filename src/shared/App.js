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
        {/* Switch 컴포넌트는 가장 처음 매칭되는것만 보여준다 */}
        <Switch>
          {/* 라우트 컴포넌트는 path 를 하나하나 비교해서 매칭되는게 여러개면 여러개 모두 보여줌 */}
          <Route exact path="/" component={Welcome} />  {/* '/' path로 봤을때, Welcome 컴포넌트를 보여줘라 */}
          {/* <PrivateRoute path="/main" 
          isAutenticated = { this.props.isAutenticated }
          component={Main} /> */}
          <Route path="/main" component={MainPage} />  {/* '/main' path로 봤을때, MainPage 컴포넌트를 보여줘라 */}
          <Route path="/add" component={HubAddPage} /> 
          <Route path="/set" component={HubSettingPage} />
          <Route path="/dadd" component={DevAddPage} />
          <Route path="/devInfo" component={DevInfoPage} />
          <Route path="/friadd" component={FriendAddPage} />
          <Route path="/log" component={HubLogPage} />
          <Route path="/hub" component={DynamicRoute} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
          <Route component={NotFound} />    {/* 아무것도 없는 페이지로 오면 noMatch 컴포넌트를 보여줌  */}
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
