import React, { Component } from 'react';
import { SocialLogin, Wrapper } from 'components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from 'store/modules/auth';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom'
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
        //authActions.kakaoAuth(auth);
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

        //인증 성공 했다면
        return false ? <Redirect to='/main' /> :
            (
                <Wrapper>
                    <SocialLogin
                        href={KAKAO_AUTH_URL}
                        type="kakao">
                        카카오 계정으로 로그인
                    </SocialLogin>
                </Wrapper>
            )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        (state) => ({
            isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
        }),
        (dispatch) => ({
            authActions: bindActionCreators(authActions, dispatch)
        })
    )(SocialLoginContainer)
);