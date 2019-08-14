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

// connect 함수 : 컴포넌트를 Redux에 연결하는 또 다른 함수를 반환한다
// connect()(Counter) : store 에 연결된 새로운 컴포넌트 클래스가 반환됨
// withRouter 이 기능은 router pathname 이 변경될때마다 호출될 수 있게 해주는 인터셉터같은 역활을 한다.
// https://codeday.me/ko/qa/20190505/464528.html
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