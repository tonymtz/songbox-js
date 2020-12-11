/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import SidebarData from './sidebar.config';
import Profile from '../Profile/index';
import Item from './Item';

import './styles/Sidebar.scss';

const Sidebar = () => {
  const nodeRef = React.useRef();

  const [sidebar, setSidebar] = useState(false);

  const darkThemeActive = useSelector((state) => state.player.darkTheme);
  const selectedIndex = useSelector((state) => state.slidebarIndex);

  const showSidebar = (newState) => { 
    if (newState !== undefined) {
      setSidebar(newState);
      return;
    }

    setSidebar(!sidebar)
  };

  useEffect(() => {
    showSidebar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  
  useEffect(() => {
    const clickOutside = (e) => {
      if (nodeRef.current.contains(e.target)) {
        return;
      }

      e.stopPropagation();
      showSidebar(false);
    };

    document.addEventListener('mousedown', clickOutside, false);

    return () => {
      document.removeEventListener('mousedown', clickOutside, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={nodeRef}>
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
                            key={item.title}
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
