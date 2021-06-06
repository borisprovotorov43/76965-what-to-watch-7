import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';

function PageHeader({ className }) {
  return (
    <header className={`page-header ${className}`}>
      <Logo />

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;
