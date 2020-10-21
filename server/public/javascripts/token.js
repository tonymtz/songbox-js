const isValidToken = async (url, cookie) => {
    const response = await fetch(url + '/api/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'dbx-token': `${cookie}`
        }
    });

    return response.json();
}; 


export { isValidToken };