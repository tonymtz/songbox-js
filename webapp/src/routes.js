import config from './config';

/* Server Routes */
export const LOGIN_PAGE = `${config.apiGatewayUrl}/login`;

/* Webapp Routes */
export const HOMEPAGE_PATH = '/app';
export const FILE_PATH = '/app/:path+';
export const FAVORITES_PATH = '/favorites';
export const SETTINGS_PATH = '/settings';
export const HELP_PATH = '/help';
export const LOGOUT_PATH = '/logout';
