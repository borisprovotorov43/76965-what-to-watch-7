import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../store/api-actions';

import { AppRoutes, AuthorizationStatus } from '../../const';

function UserBlock({ authorizationStatus, signOut, userData: { login, avatarUrl} }) {
  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to={AppRoutes.MY_LIST} >
                <img src={avatarUrl} alt={login} width="63" height="63" />
              </Link>
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={AppRoutes.LOGIN}
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
          <Link to={AppRoutes.LOGIN} className="user-block__link">Sign in</Link>
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
