import React from 'react';
import './CustomHeader.css'
import { Header } from 'semantic-ui-react';

const CustomHeader = ({ children }) => {
    return (
        <Header className="header">
            {children}
        </Header>
    );
};

export default CustomHeader;