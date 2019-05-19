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
<<<<<<< HEAD
            {/* <BasicNav user={user} />
            not found
            <BasicFooter /> */}
            not found
        </Fragment>
=======
                {/* <BasicNav user={user} />
                not found
                <BasicFooter /> */}
                not found
            </Fragment>
>>>>>>> 9382bedd945c7d9bbbae442e8de49f3139135aa5
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
<<<<<<< HEAD
); 
=======
);
>>>>>>> 9382bedd945c7d9bbbae442e8de49f3139135aa5
