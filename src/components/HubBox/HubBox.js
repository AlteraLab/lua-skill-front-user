import React from 'react';
import './HubBox.css'
import { MdDeviceHub } from 'react-icons/md';

const HubBox = ({ children }) => {
    return (
        <div className="HubBox">
            <div className="header">
                <div className="hub-name">
                    <span className="title">
                        <MdDeviceHub size={16} style={{
                            position:'relative', 
                            top: '3px', 
                            marginRight:'4px',
                            borderRadius:'5px',
                            backgroundColor:'#2A2C2B',
                            color:'white'}}/>
                        <strong>거실 허브</strong>
                    </span>
                    <span className="subtitle">203.250.32.49</span>
                </div>
                <div className="hub-info">
                    <div className="hub-info-item">
                        <div className="hub-state on">
                            <span><strong>on</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HubBox;