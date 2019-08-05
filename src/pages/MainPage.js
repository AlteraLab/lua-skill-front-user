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
import { Link } from 'react-router-dom';
import BasicBoard from '../components/BasicBoard/BasicBoard';

class MainPage extends Component {

    //HubBox 컴포넌트들을 렌더링
    _renderHubBox = (hubBoxList, renderInfo, userInfo) => {
        return hubBoxList.map(
            hubBox => {
                // if(renderInfo.items.size === 0){
                //     /*return <img src={} id={}></img> */
                // }
                return  <HubBox hubInfo={hubBox} 
                            key={hubBox.hubId} 
                            userInfo={userInfo}/>
                    
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
                <BasicNav user={user} />
                <BasicBoard
                    title="내 IoT허브"
                    renderInfo={{
                        renderFunc: this._renderHubBox,
                        items: hubs,
                        userInfo: user
                    }}
                    type="hub">
                    {<HubBox hubInfo={{
                        hub_name: '거실 허브',
                        external_ip: '203.250.32.29',
                        hub_id: 2,
                    }} userInfo={{
                        user_name: 'gd',
                        external_ip: '203.250.32.29',
                        user_id: 2,
                    }}/>}
                    <HubBox hubInfo={{
                        hub_name: '거실 허브',
                        external_ip: '203.250.32.29',
                        hub_id: 1,
                    }} userInfo={{
                        user_name: 'gd',
                        external_ip: '203.250.32.29',
                        user_id: 1,
                    }}/>
                    <HubBox hubInfo={{
                        hub_name: '거실 허브',
                        external_ip: '203.250.32.29',
                        hub_id: 2,
                    }} userInfo={{
                        user_name: 'gd',
                        external_ip: '203.250.32.29',
                        user_id: 4,
                    }}/>
                    <HubBox hubInfo={{
                        hub_name: '거실 허브',
                        external_ip: '203.250.32.29',
                        hub_id: 2,
                    }} userInfo={{
                        user_name: 'gd',
                        external_ip: '203.250.32.29',
                        user_id: 8,
                    }}/>
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
        })
    )(MainPage)
);