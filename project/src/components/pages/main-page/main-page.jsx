import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageFooter from '../../page-footer/page-footer';
import PageHeader from '../../page-header/page-header';
import FilmList from '../../film-list/film-list';
import GenreList from '../../genre-list/genre-list';

import { getFilmsByGenre } from '../../../utils';
import { DEFAULT_GENGE } from '../../../const';

function MainPage({ films, promoFilm }) {
  const { background, poster, title, genre, date } = promoFilm;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader className="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{date}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

const mapStateToProps = ({ films, currentGenre }) => ({
  films: (currentGenre === DEFAULT_GENGE) ? films : getFilmsByGenre(films, currentGenre),
});

const { string, number, array, arrayOf, shape } = PropTypes;

MainPage.propTypes = {
  promoFilm: shape({
    title: string.isRequired,
    genre: string,
    date: string,
    background: string.isRequired,
    poster: string.isRequired,
  }),
  films: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      description: string.isRequired,
      image: string.isRequired,
      background: string.isRequired,
      poster: string.isRequired,
      year: number.isRequired,
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

