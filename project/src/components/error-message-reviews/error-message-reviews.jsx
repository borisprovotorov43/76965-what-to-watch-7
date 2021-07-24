import React from 'react';
import { number } from 'prop-types';
import { getErrorMessageText } from '../../utils';
import './error-message-reviews.css';

function ErrorMessageReviews({ errorCode }) {
  return (
    <div className="error-message-reviews">
      Error: {getErrorMessageText(errorCode)}
    </div>
  );
}

ErrorMessageReviews.propTypes = {
  errorCode: number.isRequired,
};

export default ErrorMessageReviews;

