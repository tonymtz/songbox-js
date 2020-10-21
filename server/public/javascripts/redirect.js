import { findCookie, setCookie } from './cookie.js'
import { isValidToken } from './token.js'

const url = `${location.protocol}//${window.location.host}`;

let token = utils.parseQueryString(location.hash).access_token;

const checkRedirect = () => {
    const dbxToken = findCookie(document.cookie, 'dbx-token');
    isValidToken(url, dbxToken)
        .then((result) => {
            if (result.status === 200){
                    window.location = `${location.protocol}//${location.hostname}/app`;
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

if (token) {
    const cookie = {
        name: 'dbx-token',
        value: token
    };

    setCookie(url, cookie)
        .then((response) => {
            checkRedirect();
        })
        .catch ((error) => {
        console.log(error);
        });

} else {
    checkRedirect();
}