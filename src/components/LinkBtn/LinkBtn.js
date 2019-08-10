import React from 'react';
import './LinkBtn.css';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';

const LinkBtn = ({ to, context }) => {
    return (
        <Link to={to} className="LinkBtn">
            <div className="ico">
                <MdChevronLeft size={16}/>
            </div>
            <span>{context}</span>
        </Link>
    );
};

export default LinkBtn;