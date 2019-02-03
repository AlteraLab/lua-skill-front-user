import React, { Component, Fragment } from 'react';
import { SocialLoginContainer } from 'containers';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

class Welcome extends Component {

    render() {

        if (this.props.isAuthenticated)
            return <Redirect to="/main" />

        return (
            <Fragment>
                <Header />
                <Container>
                    <SocialLoginContainer />
                </Container>
            </Fragment>
        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        state => ({
            isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
        })
    )(Welcome)
);