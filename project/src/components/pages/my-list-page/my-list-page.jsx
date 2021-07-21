import React, { useEffect } from 'react';
import { string, number, arrayOf, shape, func } from 'prop-types';
import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import UserBlock from '../../user-block/user-block';
import { connect } from 'react-redux';
import { fetchFavoriteFilms } from '../../../store/api-actions';

function MyListPage({ favoriteFilms, onFetchSimilarFilms }) {

  useEffect(() => {
    onFetchSimilarFilms();
  }, [onFetchSimilarFilms]);

  return (
    <div className="user-page">

      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms} />
      </section>

      <PageFooter />
    </div>
  );
}

MyListPage.propTypes = {
  favoriteFilms: arrayOf(
    shape({
      id: number,
      name: string,
      posterImage: string,
    }),
  ).isRequired,
  onFetchSimilarFilms: func,
};

const mapStateToProps = ({ filmsReducer, loginReducer }) => ({
  favoriteFilms: filmsReducer.favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchSimilarFilms() {
    dispatch(fetchFavoriteFilms());
  },
});

export { MyListPage };
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
