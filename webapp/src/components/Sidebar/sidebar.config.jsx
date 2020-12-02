import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { CgLogOut } from 'react-icons/cg';
import { BiHelpCircle } from 'react-icons/bi';

const SidebarData = [
  {
    title: 'Home',
    path: '/app',
    icon: <AiFillHome />,
    className: 'nav-text',
  },

  {
    title: 'Favorites',
    path: '/favorites',
    icon: <MdFavorite />,
    className: 'nav-text',
  },

  {
    title: 'Settings    ',
    path: '/settings',
    icon: <IoMdSettings />,
    className: 'nav-text',
  },

  {
    title: 'Help',
    path: '/help',
    icon: <BiHelpCircle />,
    className: 'nav-text',
  },

  {
    title: 'Sign out',
    path: '/logout',
    icon: <CgLogOut />,
    className: 'nav-text',
  },
];

export default SidebarData;
