/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { changeSlidebarIndex } from '../../../store/actions';

const Item = ({ index, item }) => {
  const selectedIndex = useSelector((state) => state.slidebarIndex);
  const dispatch = useDispatch();

  return (
    <Link className="nav-item" to={item.path}>
      <li onClick={() => dispatch(changeSlidebarIndex(index))} className={`nav-li ${selectedIndex === index ? 'selected-item' : ''}`}>
        <div className="nav-item-container">
          { item.icon }
          <span className="item-title">{ item.title }</span>
        </div>
      </li>
    </Link>
  );
};

Item.propTypes = {
  index: propTypes.number,
  item: propTypes.any.isRequired,
};

Item.defaultProps = {
  index: 0,
  // eslint-disable-next-line react/default-props-match-prop-types
  item: undefined,
};

export default Item;
