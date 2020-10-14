import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as BiIcons from 'react-icons/bi';

const SidebarData = [
    {
        title: 'Home',
        path: '/app',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },

    {
        title: 'Favorites',
        path: '/favorites',
        icon: <MdIcons.MdFavorite/>,
        className: 'nav-text'
    },

    {
        title: 'Settings    ',
        path: '/settings',
        icon: <IoIcons.IoMdSettings />,
        className: 'nav-text'
    },

    {
        title: 'Help',
        path: '/help',
        icon: <BiIcons.BiHelpCircle />,
        className: 'nav-text'
    },

    {
        title: 'Sign out',
        path: '/logout',
        icon: <CgIcons.CgLogOut />,
        className: 'nav-text'
    }
];

export default SidebarData