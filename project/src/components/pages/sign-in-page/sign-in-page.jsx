import React, { useEffect } from 'react';
import { string, func } from 'prop-types';

import { connect } from 'react-redux';

import { redirectToRoute } from '../../../store/action';
import { loginUser } from '../../../store/api-actions';
import { AppRoutes, AuthorizationStatus } from '../../../const';

import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';
import SignInForm from '../../sign-in-form/sign-in-form';

function SignInPage({ authorizationStatus, onRedirectToRoute }) {

  useEffect(()=> {
    authorizationStatus === AuthorizationStatus.AUTH && onRedirectToRoute(AppRoutes.ROOT);
  },[authorizationStatus, onRedirectToRoute]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <SignInForm/>
      </div>

      <PageFooter />
    </div>
  );
}

SignInPage.propTypes = {
  authorizationStatus: string.isRequired,
  onRedirectToRoute: func.isRequired,
};

const mapStateToProps = ({ loginReducer }) => ({
  authorizationStatus: loginReducer.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoginUserSubmit(userData) {
    dispatch(loginUser(userData));
  },
  onRedirectToRoute(path) {
    dispatch(redirectToRoute(path));
  },
});

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
