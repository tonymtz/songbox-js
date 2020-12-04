/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import SidebarData from './sidebar.config';
import Profile from '../Profile/index';
import Item from './Item';

import './styles/Sidebar.scss';

const Sidebar = ({ sidebar, setSidebar }) => {
  const showSidebar = () => setSidebar(!sidebar);

  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  return (
    <div>
      <div className={`hamburger ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
        <Link to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <div className={`${sidebar ? 'sidebar active' : 'sidebar'} ${darkThemeActive ? 'dark-soft-theme-background' : ''}`}>
        <ul className="elements">
          <li className="navbar">
            <Link className="close" to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>

          <li className="profile-container">
            <Profile />
          </li>
          {
                        SidebarData.map((item, index) => (
                          <Item
                            key={uuidv4()}
                            index={index}
                            item={item}
                          />
                        ))
                    }
        </ul>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  sidebar: false,
  setSidebar: undefined,
};

Sidebar.propTypes = {
  sidebar: propTypes.bool,
  setSidebar: propTypes.func,
};

export default Sidebar;
