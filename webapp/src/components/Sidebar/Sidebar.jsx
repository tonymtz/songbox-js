import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import SidebarData from './sidebar.config';

import './styles/Sidebar.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <div>
            <div className="hamburger">
                <Link to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <ul>
                    <li className="navbar">
                        <Link to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                   <Link to={item.path}>
                                        { item.icon }
                                        <span>{ item.title }</span>
                                   </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;