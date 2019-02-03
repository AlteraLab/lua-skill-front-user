import React from 'react';
import './SocialLogin.css'
import { Container, Header, Button } from 'semantic-ui-react';
import kakaoLogo from '../../img/kakao-logo.png';

const SocialLogin = ({ href, type, children }) => {
    return (
        <div>
            {/* <SocialLogin buttonText='카카오 로그인' /> */}
            {/* "https://kauth.kakao.com/oauth/authorize?client_id=83471680d720ccbf5f678b8841136546&redirect_uri=http://localhost:3000/&response_type=code" */}
            <a href={href} className="btn btn-block social-btn">
                <img src={kakaoLogo} alt={type}></img>{children}
            </a>
        </div>
    );
};

export default SocialLogin;