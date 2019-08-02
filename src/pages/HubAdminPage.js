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
        
        const { location } =this.props;
        const {hubInfo, userInfo} = location.state;

        return (
            <Fragment>
                <BasicNav user={userInfo} />
                
                <DevBtnBoard  title="허브 관리"
                hubInfo={{
                    hub_name: '거실 허브',
                    external_ip: '203.250.32.29',
                    hub_id: 2,
                }} userInfo={{
                    user_name: 'gd',
                    external_ip: '203.250.32.29',
                    user_id: 2,
                }}> 
                    {hubInfo.adminId}
                    
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
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(HubAdminPage)
);