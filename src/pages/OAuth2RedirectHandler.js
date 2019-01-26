import React, { Component, Fragment } from 'react';
import { SocialLoginContainer } from 'containers';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

class OAuth2RedirectHandler extends Component {

    render() {
        
        const token = true;

        let result = token ? <Redirect to="/main"/> : <Redirect to="/"/>

        return result;
    }
}

export default OAuth2RedirectHandler;