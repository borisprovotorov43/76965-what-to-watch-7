import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../store/api-actions';

import { APP_ROUTES, AUTHORIZATION_STATUS } from '../../const';

function UserBlock({ authorizationStatus, signOut, userData: { login, avatarUrl} }) {
  return (
    <ul className="user-block">
      {authorizationStatus === AUTHORIZATION_STATUS.AUTH ?
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={avatarUrl} alt={login} width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={APP_ROUTES.LOGIN}
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();

                signOut();
              }}
            >Sign out
            </Link>
          </li>
        </>
        :
        <li className="user-block__item">
          <Link to={APP_ROUTES.LOGIN} className="user-block__link">Sign in</Link>
        </li>}
    </ul>
  );
}

const { string, func, shape } = PropTypes;

UserBlock.propTypes = {
  authorizationStatus: string.isRequired,
  signOut: func.isRequired,
  userData: shape({
    login: string.isRequired,
    avatarUrl: string.isRequired,
  }),
};

const mapStateToProps = ({ loginReducer }) => ({
  authorizationStatus: loginReducer.authorizationStatus,
  userData: loginReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(logoutUser());
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
