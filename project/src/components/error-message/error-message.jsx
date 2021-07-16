import React from 'react';
import { number } from 'prop-types';
import { getErrorMessageText } from '../../utils';
import './error-message.css';

function ErrorMessage({errorCode}) {
  return (
    <div className="error-message">
      Error: {getErrorMessageText(errorCode)}
    </div>
  );
}

ErrorMessage.propTypes = {
  errorCode: number.isRequired,
};

export default ErrorMessage;

