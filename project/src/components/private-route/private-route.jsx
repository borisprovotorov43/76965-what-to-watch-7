import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { APP_ROUTES, AUTHORIZATION_STATUS } from '../../const';

function PrivateRoute({ render, path, exact, authorizationStatus }) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AUTHORIZATION_STATUS.AUTH
          ? render(routeProps)
          : <Redirect to={APP_ROUTES.LOGIN}/>
      )}
    />
  );
}

const { bool, string, func } = PropTypes;

PrivateRoute.propTypes = {
  render: func.isRequired,
  path: string.isRequired,
  exact: bool.isRequired,
  authorizationStatus: string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export { PrivateRoute };
export default connect(mapStateToProps, null)(PrivateRoute);
