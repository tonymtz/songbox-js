import React, { useState } from 'react';

import Menu from './Menu';

import moreIcon from './icons/more-horizontal.svg';

import './styles/contextmenu.scss';

const ContextMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button className="icon context-menu" onClick={openMenu} type="button">
        <img src={moreIcon} alt="more-menu" />
      </button>

      <div className="dark-screen"></div>

      <Menu
        menuShowing={showMenu}
        setShowMenu={setShowMenu}
      />
    </>
  );
};

export default ContextMenu;
