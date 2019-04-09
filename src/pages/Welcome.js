import React, { Component, Fragment } from 'react';
import { SocialLoginContainer } from 'containers';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import {
    BasicFooter,
    WelcomeBoard,
    UtteranceBox,
} from '../components';

class Welcome extends Component {

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(values.id)
    }

    render() {

        if (this.props.isAuthenticated)
            return <Redirect to="/main" />

        return (
            <Fragment>
                <WelcomeBoard>
                    <SocialLoginContainer>
                        <UtteranceBox text="SIBA를 시작해보라 왈!"/>
                    </SocialLoginContainer>
                </WelcomeBoard>
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