import React from 'react';
import './styles.css';

const TitleBar = ({ labName }) => {
  return (
    <div className="title-bar">
      <h1>{labName}</h1>
    </div>
  );
};

export default TitleBar;
