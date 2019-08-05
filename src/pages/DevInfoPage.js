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
    DeviceBox,
    BasicFooter,
    LinkBtn,
    SubmitBtn
} from '../components';

class DevInfoPage extends Component {

    componentDidMount() {
    }

    render() {
        const { user} = this.props;

        return (
            <Fragment>
                <BasicNav user={user} />
                    <BasicBoard title="디바이스 1">
                        {<DeviceBox devInfo={{
                                    dev_name: '디바이스',
                                    external_ip: '203.250.32.29',
                                    dev_id: 128736,
                                }} userInfo={{
                                user_name: 'gd',
                                external_ip: '203.250.32.29',
                                user_id: 2,
                            }}/>}
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
    )(DevInfoPage)
);