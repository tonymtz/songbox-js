import React, { useState } from 'react';
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

    return (
        <div>
            <div className="hamburger">
                <Link to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <ul className="elements">
                    <li className="navbar">
                        <Link className="close" to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>

                    <li>
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