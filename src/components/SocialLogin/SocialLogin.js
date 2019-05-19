import React from 'react';
import './SocialLogin.css'
import { Container, Header, Button } from 'semantic-ui-react';
import kakaoLogo from '../../img/kakao-logo.png';
<<<<<<< HEAD
import siba from '../../img/siba.jpg';
=======
import Siba from '../../img/siba.jpg';
>>>>>>> 9382bedd945c7d9bbbae442e8de49f3139135aa5

const SocialLogin = ({ href, type, children }) => {
    return (
        <div className="SocialLogin">
            <img src={siba} width={160} id="siba"></img>
            <a href={href} className="btn btn-block social-btn">
                <img src={kakaoLogo} alt={type}></img>{children }
            </a>
        </div>
    );
};

export default SocialLogin;