import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as authActions from '../store/modules/auth';
import {
    BasicNav,
    BasicFooter,
    HubBox,
} from '../components';
import BasicBoard from '../components/BasicBoard/BasicBoard';

class MainPage extends Component {

    // 로그인 상태 -> isAuthcated 상태 true 로 변경
    _toggleIsAuthenticatedToTrue = () => {
        const { AuthActions } = this.props;
        AuthActions.toggleAuthenticatedToTrue();
    }

    //HubBox 컴포넌트들을 렌더링
    _renderHubBox = () => {
        // hubBoxList, renderInfo, userInfo
        const { hubs, user } = this.props;

        return hubs.map(
            hubBox => {
                return  <HubBox 
                            key={hubBox.hubId} 
                            hubInfo={hubBox} 
                            userId={user.userId}
                        />
            }
        )
    }

    componentDidMount() {
        const { UserActions } = this.props;
        UserActions.getUserInfo(); //사용자의 기본정보 요청
    }

    render() {
        const { user, hubs, isAuthenticated } = this.props;
        
        if(user.userId !== null && isAuthenticated === false) {
            this._toggleIsAuthenticatedToTrue();
        }

        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard
                    title="내 IoT허브"
                    renderInfo={
                        {
                            renderFunc: this._renderHubBox,
                            items: hubs,
                            userInfo: user
                        }
                    }
                    type="hub"
                >
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
            AuthActions: bindActionCreators(authActions, dispatch),
        })
    )(MainPage)
);