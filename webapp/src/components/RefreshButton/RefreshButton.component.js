import React from 'react';

import './styles/refreshbutton.scss';

const RefreshButtonComponent = ({ event }) => (
    <button className="refresh-btn" onClick={event}>Refresh</button>
);

export default RefreshButtonComponent;