import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { changeSlidebarIndex } from '../../../redux/actions';

import chevronLeft from '../icons/chevron-left.svg';
import chevronRight from '../icons/chevron-right.svg';

const Item = ({ index, item }) => {

    const selectedIndex = useSelector((state) => state.slidebarIndex);
    const dispatch = useDispatch();

    return (
        <li onClick={() => dispatch(changeSlidebarIndex(index))} className={`${item.className} ${selectedIndex === index ? 'selected-item' : ''}`}>
            <Link className="icon" to={item.path}>
                { item.icon }
                <span className="item-title">{ item.title }</span>
            </Link>
            <img src={selectedIndex === index ? chevronLeft : chevronRight} alt="chevron"/>
        </li>
    );
};

export default Item;