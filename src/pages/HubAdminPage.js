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

    _handleIsModalAboutNotAdmin = () => {
        const { HubActions } = this.props;
        HubActions.setIsModalWithFalse();
    }

    _handleIsModalAboutHubDelete = () => {
        const { UserActions, msg } = this.props;
        UserActions.setIsModalWithFalse();
        if(msg === `허브를 삭제했습니다.`) {
            UserActions.setIsRedirectToMainWithTrue();
        }
    }

    _handleDeleteHub = () => {
        const { UserActions, location } = this.props;
        const { hubInfo } = location.state;
        UserActions.deleteHub(hubInfo.hubId);
    }

    render() {
        const { location, user, connectedDevs, HubActions, 
                isGroupPage, isModalAboutNotAdmin, isModalAboutHubDelete, 
                isLoadAboutHubDelete, msg, isRediectToMain 
        } = this.props;
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
                {
                    isRediectToMain && <Redirect to='/main' />
                }
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
                    isModalAboutNotAdmin={isModalAboutNotAdmin}
                    isModalAboutHubDelete={isModalAboutHubDelete}
                    isLoadAboutHubDelete={isLoadAboutHubDelete}
                    msg={msg}
                    _handleMethods={
                        {
                            _handleGroupUserPage: this._handleGroupUserPage,
                            _handleDeleteHub: this._handleDeleteHub,
                            _handleIsModalAboutNotAdmin: this._handleIsModalAboutNotAdmin,
                            _handleIsModalAboutHubDelete: this._handleIsModalAboutHubDelete,
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
            isModalAboutNotAdmin: state.hub.getIn(['isModal']),
            isModalAboutHubDelete: state.user.getIn(['isModal']),
            isLoadAboutHubDelete: state.user.getIn(['isLoad']),
            msg: state.user.getIn(['msg']),
            isRediectToMain: state.user.getIn(['isRediectToMain']),
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
            DevActions: bindActionCreators(devActions, dispatch),
        })
    )(HubAdminPage)
);