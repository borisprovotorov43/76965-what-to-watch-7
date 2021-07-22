import React, { memo, useCallback } from 'react';
import { arrayOf, func } from 'prop-types';
import { filmPropTypes } from '../../../prop-types/film';
import { promofilmPropTypes } from '../../../prop-types/promoFilm';

import { connect } from 'react-redux';
import { DEFAULT_GENGE } from '../../../const';

import PageFooter from '../../page-footer/page-footer';
import FilmCard from '../../film-card/film-card';
import FilmList from '../../film-list/film-list';
import GenreList from '../../genre-list/genre-list';
import { getFilmsByGenreSelector } from '../../../store/selectors';
import { postFavoriteFilm } from '../../../store/api-actions';

function MainPage({ films, promoFilm, onPostFavoriteFilm }) {

  const handleFavoriteClick = useCallback(
    () => {
      const { id, isFavorite } = promoFilm;

      const statusFilm = isFavorite ? 0 : 1;
      onPostFavoriteFilm(id, statusFilm, true);
    },
    [onPostFavoriteFilm, promoFilm],
  );

  return (
    <>
      <FilmCard
        promoFilm={promoFilm}
        onHandleFavoriteClick={handleFavoriteClick}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList defaultGenge={DEFAULT_GENGE} />
          <FilmList films={films} />
        </section>
        <PageFooter className="catalog__button" />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  promoFilm: state.filmsReducer.promoFilm,
  films: getFilmsByGenreSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPostFavoriteFilm(id, status, isPromoFilm) {
    dispatch(postFavoriteFilm(id, status, isPromoFilm));
  },
});

MainPage.propTypes = {
  promoFilm: promofilmPropTypes,
  films: arrayOf(filmPropTypes),
  onPostFavoriteFilm: func,
};

export { MainPage };
export default memo(connect(mapStateToProps, mapDispatchToProps)(MainPage));
