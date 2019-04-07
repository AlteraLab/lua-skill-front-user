import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Container, Header, Button } from 'semantic-ui-react';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import { CustomHeader } from '../components';

class signup extends Component {

    componentDidMount() {
        const { UserActions } = this.props;
        UserActions.getUserInfo()
    }

    render() {
        return (
            <Fragment>
                <header>

                </header>
                <section>
                    <article>
                        
                    </article>
                </section>
                <footer>

                </footer>
            </Fragment>
        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        state => ({
            isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
        }),
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(Main)
);