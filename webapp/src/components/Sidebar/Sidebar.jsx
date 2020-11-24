import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import SidebarData from './sidebar.config';
import Profile from '../Profile/index';
import Item from './Item/';

import './styles/Sidebar.scss';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const darkThemeActive = useSelector((state) => state.player.darkTheme);

    return (
        <div>
            <div className={`hamburger ${darkThemeActive ? 'dark-theme-background dark-theme-color' : '' }`}>
                <Link to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <div className={`${sidebar ? 'sidebar active' : 'sidebar'} ${darkThemeActive ? 'dark-soft-theme-background' : '' }`}>
                <ul className="elements">
                    <li className="navbar">
                        <Link className="close" to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>

                    <li className="profile-container">
                        <Profile />
                    </li>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <Item
                                    key={index} 
                                    index={index}
                                    item={item}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;