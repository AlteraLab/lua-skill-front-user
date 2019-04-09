import React, { Component } from 'react';
import { SocialLogin } from 'components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from 'store/modules/auth';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom'
import queryString from 'query-string';
import { KAKAO_AUTH_URL } from '../constants';


class SocialLoginContainer extends Component {

    render() {
        const {
            isAuthenticated,
            location
        } = this.props;

        //인증 성공 했다면
        return false ? <Redirect to='/main' /> :
            (
                <div style={{position:'relative'}}>
                    <SocialLogin
                        href={KAKAO_AUTH_URL}
                        type="kakao">
                        카카오 계정으로 로그인
                    </SocialLogin>
                    {this.props.children}
                </div>
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