import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import {
    BasicNav,
    BasicBoard,
    BasicFooter,
    LinkBtn
} from '../components';

class HubSettingPage extends Component {
    
    componentDidMount() {
        
    }

    render() {
        const { user } = this.props;
        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard title="허브 설정">
                    
                    <LinkBtn to='./main' context="이전" />
                </BasicBoard>
                <BasicFooter />
            </Fragment>
        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        // props 로 넣어줄 스토어 상태값
        state => ({
            isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
            user: {
                name: state.user.getIn(['userInfo', 'user','name']),
                profileImage:state.user.getIn(['userInfo', 'user','profileImage']),
            },
            hubs: state.user.getIn(['userInfo', 'hubs']),
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(HubSettingPage)
);