import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import '../styles/contextmenu.scss';

import Option from '../Option';

const Menu = ({ menuShowing, setShowMenu }) => {
  const nodeRef = React.useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (nodeRef.current.contains(e.target)) {
        return;
      }

      e.stopPropagation();
      setShowMenu(false);
    };

    document.addEventListener('mousedown', clickOutside, false);

    return () => {
      document.removeEventListener('mousedown', clickOutside, false);
    };
  }, [setShowMenu]);

  return (
    <ul ref={nodeRef} className={`menu-options ${menuShowing ? '' : 'hide'}`}>
      <Option optionText="Option one" onClick={() => setShowMenu(false)} />
      <Option optionText="Option two" onClick={() => setShowMenu(false)} />
      <Option optionText="Option three" onClick={() => setShowMenu(false)} />
      <Option optionText="Close" onClick={() => setShowMenu(false)} />
    </ul>
  );
};

Menu.defaultProps = {
  menuShowing: false,
  setShowMenu: undefined,
};

Menu.propTypes = {
  menuShowing: propTypes.bool,
  setShowMenu: propTypes.func,
};

export default Menu;
