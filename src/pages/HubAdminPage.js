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

        const { location } =this.props;
        const {hubInfo, userInfo} = location.state;

        return (
            <Fragment>
                <BasicNav user={userInfo} />
                <BasicBoard title="허브 관리">
                    {hubInfo.adminId}
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
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(HubAdminPage)
);