import React from 'react';
import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';

function NotFoundPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">404</h1>
      </header>

      <main className="user-page__content-not-found">
        <p>PAGE NOT FOUND</p>
      </main>

      <PageFooter />
    </div>
  );
}

export default NotFoundPage;
