import React from 'react';
import './BasicBoard.css';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

const HubAddButton = () => {
    return (
        <Link className="hub-add-btn" to="/add">
            <div className="ico"><MdAdd size={16} /></div>
            <div className="text"><strong>새 허브 추가</strong></div>
        </Link>
    )
}

const BasicBoard = ({ children, title, renderInfo, type }) => {
    return (
        <article className="BasicBoard">
            <section className="basic-container">
                <header className="basic-header">
                    <h3>
                        <span>{title} </span>
                        {type==='hub'?<span className="hub-count blue">{renderInfo.items.size}</span>:''}
                    </h3>
                    {type==='hub'?<HubAddButton />:''}
                </header>
                <div className="box-field">
                {renderInfo ? renderInfo.renderFunc(renderInfo.items, renderInfo.userInfo):''}
                {children}
                </div>
                
            </section>
        </article>
    );
};

export default BasicBoard;