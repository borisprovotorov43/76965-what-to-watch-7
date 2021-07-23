import React, { useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import { redirectToRoute } from '../../../store/action';
import { loginUser } from '../../../store/api-actions';
import { APP_ROUTES, AUTHORIZATION_STATUS } from '../../../const';

import camelize from 'camelize';
import cx from 'classnames';

import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';

function SignInPage({ authorizationStatus, onSubmit, onRedirectToRoute }) {

  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
  });

  const [errorText ,setErrorText] = useState(false);
  const [isErrorEmail ,setErrorEmail] = useState(false);
  const [isErrorPassword ,setErrorPassword] = useState(false);

  useEffect(()=> {
    authorizationStatus === AUTHORIZATION_STATUS.AUTH && onRedirectToRoute(APP_ROUTES.ROOT);
  },[authorizationStatus, onRedirectToRoute]);

  function handleFieldChange (evt) {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [camelize(name)]: value,
    });
  }

  function handleSubmit (evt) {
    evt.preventDefault();

    const { userEmail, userPassword } = formData;
    const regExEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const isInValidEmail = !regExEmail.test(userEmail);

    let isValid = false;

    if ((userEmail === '' && userPassword === '') || (isInValidEmail && userPassword.trim() !== '')) {
      setErrorText('Please enter a valid email address');
      setErrorEmail(true);
      setErrorPassword(false);
    } else if (!isInValidEmail && userPassword.trim() === '') {
      setErrorText('Please enter a valid password');
      setErrorEmail(false);
      setErrorPassword(true);
    } else if (isInValidEmail && userPassword.trim() === '') {
      setErrorText('We can’t recognize this email and password combination. Please try again.');
      setErrorEmail(true);
      setErrorPassword(true);
    } else {
      setErrorText(false);
      isValid = true;
    }

    if (isValid) {
      setErrorEmail(false);
      setErrorPassword(false);
      onSubmit({
        email: userEmail,
        password: userPassword,
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
        {errorText && (
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>
        )}
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className={cx('sign-in__field', { 'sign-in__field--error': isErrorEmail })}>
              <input className="sign-in__input" onChange={handleFieldChange} type="text" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={cx('sign-in__field', { 'sign-in__field--error': isErrorPassword })}>
              <input className="sign-in__input" onChange={handleFieldChange} type="password" placeholder="Password" name="user-password" id="user-password" />
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
  authorizationStatus: string.isRequired,
  onSubmit: func.isRequired,
  onRedirectToRoute: func.isRequired,
};

const mapStateToProps = ({ loginReducer }) => ({
  authorizationStatus: loginReducer.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(userData) {
    dispatch(loginUser(userData));
  },
  onRedirectToRoute(path) {
    dispatch(redirectToRoute(path));
  },
});

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
