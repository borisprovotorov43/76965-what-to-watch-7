import React from 'react';
import { string } from 'prop-types';

function SingInMessage({ errorText }) {
  return (
    <div className="sign-in__message">
      <p>{errorText}</p>
    </div>
  );
}

SingInMessage.propTypes = {
  errorText: string.isRequired,
};

export default SingInMessage;

