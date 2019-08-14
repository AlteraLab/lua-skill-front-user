import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import {
    BasicNav,
    BasicFooter,
    DevBtnBoard
} from '../components';

class HubAdminPage extends Component {


    componentDidMount() {
    }

    render() {
        
        const { location, user } = this.props;
        const {hubInfo} = location.state;
        return (
            <Fragment>
                <BasicNav user={user} />
                
                <DevBtnBoard  
                    title="허브 관리"
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
                            hubMac: hubInfo.mac_addr
                        }
                    } 
                    userInfo={
                        {
                            user_name: 'gd',
                            external_ip: '203.250.32.29',
                            user_id: 2,
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
            },
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(HubAdminPage)
);