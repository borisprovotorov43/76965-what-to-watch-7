import React, { memo } from 'react';
import { arrayOf } from 'prop-types';
import { filmPropTypes } from '../../../prop-types/film';
import { promofilmPropTypes } from '../../../prop-types/promoFilm';

import { connect } from 'react-redux';
import { getFilmsByGenreSelector, getPromoFilm } from '../../../store/selectors';

import { DEFAULT_GENGE } from '../../../const';

import PageFooter from '../../page-footer/page-footer';
import FilmCard from '../../film-card/film-card';
import FilmList from '../../film-list/film-list';
import GenreList from '../../genre-list/genre-list';

function MainPage({ films, promoFilm}) {
  return (
    <>
      <FilmCard promoFilm={promoFilm} />
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
  promoFilm: getPromoFilm(state),
  films: getFilmsByGenreSelector(state),
});

MainPage.propTypes = {
  promoFilm: promofilmPropTypes,
  films: arrayOf(filmPropTypes),
};

export { MainPage };
export default memo(connect(mapStateToProps)(MainPage));
