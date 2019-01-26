import React from 'react';
import './SocialLogin.css'
import { Container, Header, Button } from 'semantic-ui-react';

const SocialLogin = ({buttonText}) =>{
    return(
        <Button className="SocialLogin" id="kakao-login-btn">
            {buttonText}
        </Button>
    );
};

export default SocialLogin;