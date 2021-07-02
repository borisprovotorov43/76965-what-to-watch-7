import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filmPropTypes } from '../../../prop-types/films';
import PageFooter from '../../page-footer/page-footer';
import PageHeader from '../../page-header/page-header';
import FilmList from '../../film-list/film-list';
import NotFoundPage from '../not-found-page/not-found-page';

import { APP_ROUTES } from '../../../const';
import { getRatingName } from '../../../utils';
import { fetchSimilarFilms } from '../../../store/api-actions';

function FilmPage({
  currentFilm,
  similarFilms,
  onFetchSimilarFilms,
}) {
  const { id } = useParams();

  useEffect(() => {
    onFetchSimilarFilms(id);
  }, [id, onFetchSimilarFilms]);

  if (currentFilm.length > 0) {
    const {
      name,
      description,
      backgroundImage,
      posterImage,
      released,
      genre,
      director,
      rating,
      scoresCount,
      starring,
    } = currentFilm[0];

    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={backgroundImage} alt={name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>
            <PageHeader className="film-card__head" />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{genre}</span>
                  <span className="film-card__year">{released}</span>
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
                  <Link to={`${APP_ROUTES.FILMS}/${id}${APP_ROUTES.REVIEW}`} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={posterImage} alt={name} width="218" height="327" />
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
            <FilmList films={similarFilms} />
          </section>
          <PageFooter />
        </div>
      </>
    );
  }

  return <NotFoundPage />;
}

const { array, func } = PropTypes;

FilmPage.propTypes = {
  similarFilms: array.isRequired,
  onFetchSimilarFilms: func.isRequired,
  currentFilm: filmPropTypes,
};

const mapDispatchToProps = (dispatch) => ({
  onFetchSimilarFilms(id) {
    dispatch(fetchSimilarFilms(id));
  },
});

const mapStateToProps = (state) => ({
  similarFilms: state.similarFilms,
});

export { FilmPage };
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
