import React from 'react';

const OptionSection = ({ title, children }) => {
    return (
        <div className="section-container">
            <h1 className="section-title">{ title ? title : 'Unnamed section' }</h1>
            { children }
        </div>
    );
};

export default OptionSection;