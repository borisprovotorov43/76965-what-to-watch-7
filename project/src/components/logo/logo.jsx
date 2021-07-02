import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { APP_ROUTES } from '../../const';

function Logo({ className }) {
  return (
    <div className="logo">
      <Link className={cx('logo__link', className)} to={APP_ROUTES.ROOT}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

const { string } = PropTypes;

Logo.propTypes = {
  className: string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
