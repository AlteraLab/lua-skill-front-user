import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import * as devActions from '../store/modules/dev';
import {
    BasicNav,
    BasicFooter
} from '../components';
import {
    FriendAddPage
} from '.';
import DevBtnBoard from '../components/DevBtnBoard/DevBtnBoard';

class HubAdminPage extends Component {

    componentDidMount() {
        const { DevActions, location } = this.props;
        const { hubInfo } = location.state;
        DevActions.requestConnectedDevs(hubInfo.external_ip, hubInfo.external_port);
    }

    _handleGroupUserPage = (e) => {
        const { user, HubActions, location } = this.props;
        const { hubInfo } = location.state;
        if(hubInfo.adminId !== user.userId) {
            e.preventDefault();
            HubActions.setIsModalWithTrue();
        } else if(hubInfo.adminId === user.userId) {
            HubActions.setIsGroupPageWithTrue();
        }
    }

    _handleDeviceAddPage = (e) => {
        const { user, location, HubActions, DevActions } = this.props;
        const { hubInfo } = location.state;
        if (hubInfo.adminId !== user.userId) {
            e.preventDefault();
            HubActions.setIsModalWithTrue();
        } else if (hubInfo.adminId === user.userId) { // 권한이 있으면 devAddPage로 Redirect
            DevActions.setIsRidirectToDevAddWithTrue();
        }
    }

    _handleIsModal = () => {
        const { HubActions } = this.props;
        HubActions.setIsModalWithFalse();
    }

    _handleDeleteHub = () => {
        console.log('_handleDeleteHub');
        console.log('_handleDeleteHub');
        console.log('_handleDeleteHub');
        console.log('_handleDeleteHub');
        console.log('_handleDeleteHub');
        console.log('_handleDeleteHub');
        console.log('_handleDeleteHub');
        console.log('_handleDeleteHub');
    }

    render() {
        const { location, user, connectedDevs, HubActions, isGroupPage, isModal } = this.props;
        const { hubInfo } = location.state;
        return isGroupPage ? 
        (
            <FriendAddPage 
                HubActions={HubActions}
                externalIp={hubInfo.external_ip}
            />
        ) 
        : 
        (
            <Fragment>
                <BasicNav user={user} />
                <DevBtnBoard
                    title="허브 관리"
                    connectedDevs={connectedDevs} 
                    HubActions={HubActions}
                    userId={user.userId}
                    hubInfo={
                        {
                            adminId: hubInfo.adminId,
                            role: hubInfo.role,
                            hubId: hubInfo.hubId,
                            hubName: hubInfo.hub_name,
                            hubDescript: hubInfo.hub_descript,
                            searchId: hubInfo.search_id,
                            state: hubInfo.state,

                            lastUsedTime: hubInfo.lastUsedTime,
                            updatedAt: hubInfo.updatedAt,
                            createdAt: hubInfo.createdAt,

                            externalIp: hubInfo.external_ip,
                            externalPort: hubInfo.external_port,
                            hubMac: hubInfo.mac_addr,
                        }
                    }
                    isModal={isModal}
                    _handleMethods={
                        {
                            _handleGroupUserPage: this._handleGroupUserPage,
                            _handleIsModal: this._handleIsModal,
                            _handleDeleteHub: this._handleDeleteHub,
                        }
                    }
                >
                </DevBtnBoard>
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
                name: state.user.getIn(['userInfo', 'user', 'name']),
                profileImage: state.user.getIn(['userInfo', 'user', 'profileImage']),
                userId: state.user.getIn(['userInfo', 'user', 'userId']),
            },
            connectedDevs: state.dev.getIn(['dev', 'connectedDevs']),
            isGroupPage: state.hub.getIn(['isGroupPage']),
            isModal: state.hub.getIn(['isModal']),
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
            DevActions: bindActionCreators(devActions, dispatch),
        })
    )(HubAdminPage)
);