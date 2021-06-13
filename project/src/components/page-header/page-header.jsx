import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

function PageHeader({ className }) {
  return (
    <header className={cx('page-header', className)}>
      <Logo />
      <UserBlock />
    </header>
  );
}

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;
