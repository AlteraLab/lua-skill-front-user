import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import {
    BasicNav,
    BasicFooter,
    BasicBoard,
    LinkBtn
} from '../components';

class FriendAddPage extends Component {

    componentDidMount(){

    }


    render() {
        const {  user  } = this.props;
        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard
                title="친구 추가" >
                    
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
            hubs: state.user.getIn(['userInfo', 'hubs']),
        }),
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch)
        })
    )(FriendAddPage)
);