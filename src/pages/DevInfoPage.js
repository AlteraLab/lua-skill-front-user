import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as devActions from '../store/modules/dev';
import {
    BasicNav,
    BasicBoard,
    DeviceBox,
    BasicFooter,
} from '../components';

class DevInfoPage extends Component {

    componentDidMount() {
        const { DevActions, location } = this.props;
        DevActions.getDevDetail(location.state.devType);
    }

    render() {
        const { user } = this.props;

        return (
            <Fragment>
                <BasicNav user={user} />
                    <BasicBoard title="디바이스 1">
                        {
                            <DeviceBox
                                devInfo={
                                    {
                                            dev_name: '에어컨',
                                            dev_model:'LG airconditioner',
                                            dev_type:'(센싱, 제어, 복합)',
                                            dev_mac:'akakaka',
                                            dev_make:'LG',
                                            dev_id: 128736
                                    }
                                } 
                            />
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
            user: {
                name: state.user.getIn(['userInfo', 'user','name']),
                profileImage:state.user.getIn(['userInfo', 'user','profileImage']),
            },
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            DevActions: bindActionCreators(devActions, dispatch),
        })
    )(DevInfoPage)
);