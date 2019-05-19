import React, { Component, Fragment } from 'react';
import {
    BasicNav,
    BasicFooter,
} from '../components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class NotFound extends Component {

    render() {
        const { user } = this.props;
        return (
            <Fragment>
            {/* <BasicNav user={user} />
            not found
            <BasicFooter /> */}
            not found
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
        })
    )(NotFound)
); 