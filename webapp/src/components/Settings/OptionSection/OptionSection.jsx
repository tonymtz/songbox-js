import React from 'react';
import propTypes from 'prop-types';

const OptionSection = ({ title, children }) => (
  <div className="section-container">
    <h1 className="section-title">{ title || 'Unnamed section' }</h1>
    { children }
  </div>
);

OptionSection.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

OptionSection.defaultProps = {
  title: '',
  children: undefined,
};

export default OptionSection;
