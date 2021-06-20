import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import UserBlock from '../../user-block/user-block';

function MyListPage({ films }) {
  return (
    <div className="user-page">

      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} />12
      </section>

      <PageFooter />
    </div>
  );
}

const { string, number, arrayOf, shape } = PropTypes;

MyListPage.propTypes = {
  films: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      image: string.isRequired,
    }),
  ).isRequired,
};

export default MyListPage;