import React, { Component, Fragment } from 'react';
import { SocialLoginContainer } from 'containers';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Container, Header, Grid } from 'semantic-ui-react'
import queryString from 'query-string'

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
                <Grid centered verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <SocialLoginContainer />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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