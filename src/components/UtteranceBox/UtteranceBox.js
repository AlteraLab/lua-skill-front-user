import React from 'react';
import './UtteranceBox.css';
import Moment from 'react-moment';

const Triangle = () => {
    return (
        <div className="Triangle">
            <div className="arrow-up"/>
            <div className="border"/>
            {/* <div className="arrow-down"/>
            <div className="arrow-left"/>
            <div className="arrow-right"/> */}
        </div>
    )
}

const UtteranceBox = ({ text }) => {
    return (
        <div className="UtteranceBox">
            <Triangle/>
            <span>{text}</span>
            <div className="time">
                <Moment format="A HH:mm">
                    {new Date()}
                </Moment>
            </div>
        </div>
    );
};

export default UtteranceBox;