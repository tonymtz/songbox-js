import React from 'react';

const Option = ({ optionText, onClick }) => {
    return (
        <>
            <h4 
                className="option-title option-hover"
                onClick={() => onClick()}>
                { optionText ? optionText : 'Unammed option'}
            </h4>
        </>
    );
};

export default Option;