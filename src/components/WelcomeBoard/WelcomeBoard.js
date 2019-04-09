import React from 'react';
import './WelcomeBoard.css'
import { MdMenu, MdArrowBack } from 'react-icons/md';

const WelcomeBoard = ({ children }) => {
    return (
            <div className="WelcomeBoard">
                <header>
                    <div className="title">내 손안에 작은 SIBA</div>
                    <div className="sub-title">
                        <span>S</span>{'NS & '}<span>I</span>oT <span>B</span>ased on <span>A</span>I Chatbot
                    </div>
                </header>
                <div className="smartphone">
                    <div className="smartphone-head" />
                    <div className="inner">
                        <div className="inner-nav">
                            <MdArrowBack size={20} style={{
                                float: 'left'
                            }} />
                            <span className="kakao-friend"><strong>SIBA</strong></span>
                            <MdMenu size={20} style={{
                                float: 'right'
                            }} />
                        </div>
                        {children}
                    </div>
                    <div className="smartphone-btn" />
                </div>
            </div>
    );
};

export default WelcomeBoard;