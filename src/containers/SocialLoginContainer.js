import React, { Component } from 'react';
import { SocialLogin } from 'components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from 'store/modules/auth';
import { bindActionCreators } from 'redux';
import  { Redirect, Link } from 'react-router-dom'
import queryString from 'query-string';
import { KAKAO_AUTH_URL } from '../constants';
// import { Record } from 'immutable';


class SocialLoginContainer extends Component {

    /*constructor() {
        super();
        window.Kakao.init('ac81b365b933a18eccaa7c42d0c043aa');
    }*/

    _onSuccess = (auth) => {
        const { authActions } = this.props;
        

        console.log(auth);
        authActions.kakaoAuth(auth);
        //authActions.kakaoAuth(auth);

        //로그인 성공 시, 카카오 API 호출
        //window.Kakao.API.request({
        //    url: '/v2/user/me',
        //    success: (res) => console.log(res),
        //    fail: (err) => console.log(err)
        //});
    }

    _loginProcess = () => {
        console.log('kakao login');
    }


    componentDidMount() {
        /*window.Kakao.Auth.createLoginButton({
            container: '#kakao-login-btn',
            success: this._onSuccess
        });*/
    }

    render() {
        const {
            isAuthenticated,
            location
        } = this.props;

        /*let query = queryString.parse(location.search)
        console.log(query)
        if(query){
            this.props.authActions.kakaoAuth(query.code);
        }*/

        //인증 성공 했다면
        return false ? <Redirect to='/main'/> :
        (
            <div>
                {/* <SocialLogin buttonText='카카오 로그인' /> */}
                {/* "https://kauth.kakao.com/oauth/authorize?client_id=83471680d720ccbf5f678b8841136546&redirect_uri=http://localhost:3000/&response_type=code" */}
                <a href={KAKAO_AUTH_URL}>
                카카오 계정으로 로그인하기</a>
                <div><span>TestValue: {isAuthenticated===true ? 'yes': 'no'}</span></div>
            </div>

        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        (state) => ({
            isAuthenticated: state.auth.getIn(['userState','isAuthenticated']),
        }),
        (dispatch) => ({
            authActions: bindActionCreators(authActions, dispatch)
        })
    )(SocialLoginContainer)
);