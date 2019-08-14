import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import * as devActions from '../store/modules/dev';

import {
    BasicNav,
    BasicBoard,
    BasicFooter,
    LinkBtn,
    DevAddResModal
} from '../components';
import ScanDevList from '../components/ScanDevList/ScanDevList';

class DevAddPage extends Component {

    // componentDidMount() {
    //     const { DevActions, location } = this.props;
    //     const { hubInfo } = location.state;
    //     DevActions.scanDev(hubInfo.externalIp, hubInfo.externalPort);
    // }

    render() {
        const { user, scanDevs, DevActions, isModal, isResult } = this.props;

        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard 
                    title="새로운 디바이스 추가하기"
                >
                    <LinkBtn 
                        to='./main' 
                        context="이전"
                    />
                    <ScanDevList
                        scanDevs={scanDevs}
                        DevActions={DevActions}
                    />
                    {
                        isModal && (
                                        <DevAddResModal
                                            isResult={isResult}
                                            _handleIsModal={DevActions.setIsModalWithFalse}
                                        />
                                    )
                    }
                    
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
            scanDevs: state.dev.getIn(['dev', 'scanDevs']),
            isModal: state.dev.get('isModal'),
            isResult: state.dev.get('isResult'),
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
            DevActions: bindActionCreators(devActions, dispatch),
        })
    )(DevAddPage)
);