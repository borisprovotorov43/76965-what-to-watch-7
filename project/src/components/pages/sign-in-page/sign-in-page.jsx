import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../store/api-actions';
import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';

function SignInPage({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleLoginChange({ target: { value } }) {
    setFormData({
      ...formData,
      email: value,
    });
  }

  function handlePasswordChange({ target: { value } }) {
    setFormData({
      ...formData,
      password: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if(formData.password.trim().length) {
      onSubmit({
        email: formData.email,
        password: formData.password,
      });
    }
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" onChange={handleLoginChange} type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" onChange={handlePasswordChange} type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
}

const { func } = PropTypes;

SignInPage.propTypes = {
  onSubmit: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(userData) {
    dispatch(loginUser(userData));
  },
});

export {SignInPage};
export default connect(null, mapDispatchToProps)(SignInPage);
