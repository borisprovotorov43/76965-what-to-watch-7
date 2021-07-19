import React, { memo } from 'react';
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

const { string } = PropTypes;

PageHeader.propTypes = {
  className: string,
};

export default memo(PageHeader);
