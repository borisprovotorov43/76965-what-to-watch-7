import React from 'react';
import './spinner.css';

function Spinner() {
  return (
    <div className="lds-wrap">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export default Spinner;

