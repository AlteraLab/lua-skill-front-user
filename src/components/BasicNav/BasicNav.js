import React from 'react';
import './BasicNav.css'
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'
import { MdAccountCircle } from 'react-icons/md';

const BasicNav = ({ user }) => {
  
    const { name, profileImage } = user;

    return (
        <nav className="BasicNav">
            <h1>
                <Link to="/main">
                    <span>SIBA with kakao</span>
                </Link>
            </h1>
            <div className="util-list">
                <div className="util-item">
                    {name}
                </div>
                <Dropdown 
                    trigger={
                        <span>
                            {
                                profileImage ?
                                <img 
                                    alt='Avatar' 
                                    src={profileImage} 
                                    height={32} 
                                    width={32} 
                                /> 
                                : 
                                <MdAccountCircle size={32}/>
                            }
                            <div className="notification">
                                9+
                            </div>
                        </span>
                    } 
                    pointing='top right' 
                    icon={null}
                >
                    <Dropdown.Menu>
                        <Dropdown.Item>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
};

export default BasicNav;