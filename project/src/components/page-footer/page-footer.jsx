import React from 'react';
import Logo from '../logo/logo';

function PageFooter() {
  return (
    <footer className="page-footer">
      <Logo className="logo__link--light" />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default PageFooter;
