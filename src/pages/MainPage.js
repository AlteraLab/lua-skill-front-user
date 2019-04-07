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
    BasicFooter,
    HubBox,
} from '../components';
import BasicBoard from '../components/BasicBoard/BasicBoard';

class MainPage extends Component {

    //HubBox 컴포넌트들을 렌더링
    _rederHubBox = (hubBoxList) =>{
        return hubBoxList.map(
            hubBox => {
                return <HubBox/>
            }
        )
    } 

    componentDidMount() {
        const { UserActions } = this.props;
        UserActions.getUserInfo(); //사용자의 기본정보 요청
    }

    render() {
        const { user, hubs } = this.props;
        return (
            <Fragment>
                <BasicNav user={user}/>
                <BasicBoard 
                    title="내 IoT허브"
                    renderInfo={{
                        renderFunc: this._rederHubBox,
                        items: hubs
                    }}
                    type="hub"
                />
                <BasicFooter/>
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
                name: state.user.getIn(['userInfo', 'user','name']),
                profileImage:state.user.getIn(['userInfo', 'user','profileImage']),
            },
            hubs: state.user.getIn(['userInfo', 'hubs'])
        }),
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
        })
    )(MainPage)
);