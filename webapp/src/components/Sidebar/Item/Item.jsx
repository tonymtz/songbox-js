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
        <Link className={`nav-item`} to={item.path} >
            <li onClick={() => dispatch(changeSlidebarIndex(index))} className={`nav-li ${selectedIndex === index ? 'selected-item' : ''}`}>
                <div>
                    { item.icon }
                    <span className="item-title">{ item.title }</span>
                </div>
                <img className="chevron" src={selectedIndex === index ? chevronLeft : chevronRight} alt="chevron"/>
            </li>
        </Link>
    );
};

export default Item;