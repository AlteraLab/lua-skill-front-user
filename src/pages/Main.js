import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Container, Header, Button } from 'semantic-ui-react';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import { CustomHeader } from '../components';
import ip from 'ip';
import publicIp from 'public-ip';

class Main extends Component {

    _createHub = () => {
        const { HubActions } = this.props;
        console.log(ip.address())
        publicIp.v4().then(res=>{
            console.log(res)
            HubActions.registerHub(res);
        })
        
    }

    componentDidMount() {
        const { UserActions } = this.props;
        UserActions.getUserInfo()
    }

    render() {
        return (
            <Fragment>
                <CustomHeader>
                    <span>SIBA</span>
                </CustomHeader>
                <Container>
                    <Button onClick={this._createHub}>허브 등록</Button>
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
        }),
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(Main)
);