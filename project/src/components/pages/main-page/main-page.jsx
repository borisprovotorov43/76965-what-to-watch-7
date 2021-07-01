import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageFooter from '../../page-footer/page-footer';
import FilmCard from '../../film-card/film-card';
import FilmList from '../../film-list/film-list';
import GenreList from '../../genre-list/genre-list';

import { getFilmsByGenre } from '../../../utils';
import { DEFAULT_GENGE } from '../../../const';

function MainPage({ films, promoFilm }) {
  return (
    <>
      <FilmCard promoFilm={promoFilm} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList defaultGenge={DEFAULT_GENGE} />
          <FilmList films={films} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <PageFooter className="catalog__button" />
      </div>
    </>
  );
}

const mapStateToProps = ({ films, currentGenre, promoFilm }) => ({
  promoFilm: promoFilm,
  films: (currentGenre === DEFAULT_GENGE) ? films : getFilmsByGenre(films, currentGenre),
});

const { string, number, array, arrayOf, shape } = PropTypes;

MainPage.propTypes = {
  promoFilm: shape({
    name: string,
    genre: string,
    date: string,
    backgroundImage: string,
    posterImage: string,
  }),
  films: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      description: string.isRequired,
      previewImage: string.isRequired,
      backgroundImage: string.isRequired,
      posterImage: string.isRequired,
      released: number.isRequired,
      genre: string.isRequired,
      director: string.isRequired,
      rating: number.isRequired,
      scoresCount: number.isRequired,
      starring: array.isRequired,
    }),
  ).isRequired,
};

export { MainPage };
export default connect(mapStateToProps)(MainPage);

