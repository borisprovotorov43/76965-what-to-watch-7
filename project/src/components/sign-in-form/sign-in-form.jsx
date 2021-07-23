import React, { useState } from 'react';
import { func } from 'prop-types';
import cx from 'classnames';
import camelize from 'camelize';
import { connect } from 'react-redux';

import useValidation from '../../hooks/use-validation';
import { loginUser } from '../../store/api-actions';
import SingInMessage from '../sign-in-message/sign-in-message';

function SignInForm({ onLoginUserSubmit }) {
  const [formData, setFormData] = useState({ userEmail: '', userPassword: '' });
  const [errorText, isErrorEmail, isErrorPassword, onHandleSubmit] = useValidation();

  const handleFieldChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [camelize(name)]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onHandleSubmit(formData, onLoginUserSubmit);
  };

  return (
    <>
      {errorText && <SingInMessage errorText={errorText} />}
      <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
        <div className="sign-in__fields">
          <div className={cx('sign-in__field', { 'sign-in__field--error': isErrorEmail })}>
            <input
              className="sign-in__input"
              onChange={handleFieldChange}
              type="text" placeholder="Email address"
              name="user-email" id="user-email"
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className={cx('sign-in__field', { 'sign-in__field--error': isErrorPassword })}>
            <input
              className="sign-in__input"
              onChange={handleFieldChange}
              type="password" placeholder="Password"
              name="user-password"
              id="user-password"
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </>
  );
}

SignInForm.propTypes = {
  onLoginUserSubmit: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLoginUserSubmit(userData) {
    dispatch(loginUser(userData));
  },
});

export {SignInForm};
export default connect(null, mapDispatchToProps)(SignInForm);
