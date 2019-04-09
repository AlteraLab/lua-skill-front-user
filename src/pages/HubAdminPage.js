import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import ip from 'ip';
import publicIp from 'public-ip';
import {
    BasicNav,
    BasicBoard,
    InputContainer,
    InputItem,
    BasicFooter,
    LinkBtn,
    SubmitBtn
} from '../components';
import scanBtnImg from '../img/scan-button-img.jpg';

class HubAdminPage extends Component {

    componentDidMount() {
    }

    render() {

        const { user } =this.props;

        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard title="허브 관리">

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
            scanHubInfo: {
                status: state.hub.getIn(['scanHubInfo','status']),
                external_ip: state.hub.getIn(['scanHubInfo','external_ip']),
                external_port: state.hub.getIn(['scanHubInfo','external_port']),
                mac_addr: state.hub.getIn(['scanHubInfo','mac_addr']),
                before_ip: state.hub.getIn(['scanHubInfo','before_ip']),
            },
            editHubInfo: {
                hubName: state.hub.getIn(['editHubInfo','hubName']),
                hubId: state.hub.getIn(['editHubInfo','hubId']),
                hubDesc: state.hub.getIn(['editHubInfo','hubDesc'])
            }
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(HubAdminPage)
);