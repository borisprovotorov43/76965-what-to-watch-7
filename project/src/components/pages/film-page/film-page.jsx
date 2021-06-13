import React from 'react';
import { Link } from 'react-router-dom';

import PageFooter from '../../page-footer/page-footer';
import PageHeader from '../../page-header/page-header';
import FilmList from '../../film-list/film-list';
import NotFoundPage from '../not-found-page/not-found-page';

import { getRatingName } from '../../../utils';
import { AppRoute } from '../../../const';
import PropTypes from 'prop-types';

function FilmPage({ film, filmsSimillar, params }) {

  if(film) {
    const { id } = params;
    const {
      title,
      description,
      background,
      poster,
      year,
      genre,
      director,
      rating,
      scoresCount,
      starring,
    } = film[0];

    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={background} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>
            <PageHeader className="film-card__head" />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{title}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{genre}</span>
                  <span className="film-card__year">{year}</span>
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
                  <Link to={`${AppRoute.FILMS}/${id}${AppRoute.REVIEW}`} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={poster} alt={title} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="#" className="film-nav__link">Overview</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Details</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="film-rating">
                  <div className="film-rating__score">{rating}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">{getRatingName(rating)}</span>
                    <span className="film-rating__count">{scoresCount} ratings</span>
                  </p>
                </div>
                <div className="film-card__text">
                  <p>{description}</p>
                  <p className="film-card__director"><strong>Director: {director}</strong></p>
                  <p className="film-card__starring">
                    <strong>Starring: {starring.join(', ')} </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmList films={filmsSimillar} />
          </section>
          <PageFooter />
        </div>
      </>
    );
  } else {
    return <NotFoundPage />;
  }
}

FilmPage.propTypes = {
  filmsSimillar: PropTypes.array.isRequired,
  params: PropTypes.any.isRequired,
  film: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      starring: PropTypes.array.isRequired,
    }).isRequired,
  ),
};

export default FilmPage;
