import React, { Component } from 'react';
import { SocialLogin } from 'components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from 'store/modules/auth';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'
import { KAKAO_AUTH_URL } from '../constants';


class SocialLoginContainer extends Component {

    render() {
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