import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import { SibaHeader } from '../components';
import ip from 'ip';
import publicIp from 'public-ip';
import {
    BasicNav,
    BasicBoard,
    BasicFooter,
    HubLogList
} from '../components';
import '../components/HubLogList/HubLogList.css';

class HubLogPage extends Component {
    
    render() {
        const { 
            user,
        } = this.props;

        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard
                    title="허브 로그" 
                >
                    <HubLogList />
                </BasicBoard>
                <BasicFooter />
            </Fragment>
        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        state => ({
            isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
            user: {
                userId: state.user.getIn(['userInfo', 'user', 'userId']),
                name: state.user.getIn(['userInfo', 'user', 'name']),
                profileImage: state.user.getIn(['userInfo', 'user', 'profileImage']),
            },
            hubs: state.user.getIn(['userInfo', 'hubs'])
        }),
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            hubActions : bindActionCreators(hubActions, dispatch)
        })
    )(HubLogPage)
);