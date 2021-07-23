import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoutes, AuthorizationStatus } from '../../const';

function PrivateRoute({ render, path, exact, authorizationStatus }) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoutes.LOGIN}/>
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

const mapStateToProps = ({ loginReducer }) => ({
  authorizationStatus: loginReducer.authorizationStatus,
});

export { PrivateRoute };
export default connect(mapStateToProps, null)(PrivateRoute);
