import React from 'react';
import './BasicNav.css'
import { Link } from 'react-router-dom';

const BasicNav = () => {

    return (
        <nav className="BasicNav">
            <h1>
                <Link to="/main">
                    <span>SIBA with kakao</span>
                </Link>
            </h1>
        </nav>
    );
};

export default BasicNav;