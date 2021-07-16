import React, { useEffect } from 'react';
import { array, func, shape, string, number } from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PageFooter from '../../page-footer/page-footer';
import PageHeader from '../../page-header/page-header';
import FilmList from '../../film-list/film-list';
import Tabs from '../../tabs/tabs';
import NotFoundPage from '../not-found-page/not-found-page';

import { APP_ROUTES, AUTHORIZATION_STATUS } from '../../../const';
import { fetchSimilarFilms, fetchCurrentFilm } from '../../../store/api-actions';

function FilmPage({
  currentFilm,
  similarFilms,
  onFetchSimilarFilms,
  onFetchCurrentFilm,
  authorizationStatus,
}) {
  const { id } = useParams();

  useEffect(() => {
    onFetchSimilarFilms(id);
    onFetchCurrentFilm(id);
  }, [id, onFetchCurrentFilm, onFetchSimilarFilms]);

  if (currentFilm) {
    const {
      name,
      backgroundImage,
      posterImage,
      released,
      genre,
    } = currentFilm;

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
                  {authorizationStatus === AUTHORIZATION_STATUS.AUTH && <Link to={`${APP_ROUTES.FILMS}/${id}${APP_ROUTES.REVIEW}`} className="btn film-card__button">Add review</Link>}
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={posterImage} alt={name} width="218" height="327" />
              </div>
              <Tabs film={currentFilm} filmId={id} />
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

FilmPage.propTypes = {
  similarFilms: array.isRequired,
  onFetchSimilarFilms: func.isRequired,
  onFetchCurrentFilm: func.isRequired,
  currentFilm: shape({
    name: string.isRequired,
    backgroundImage: string.isRequired,
    posterImage: string.isRequired,
    released: number.isRequired,
    genre: string.isRequired,
  }),
  authorizationStatus: string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFetchSimilarFilms(id) {
    dispatch(fetchSimilarFilms(id));
  },
  onFetchCurrentFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },
});

const mapStateToProps = ({
  similarFilms,
  currentFilm,
  authorizationStatus,
}) => ({
  similarFilms,
  currentFilm,
  authorizationStatus,
});

export { FilmPage };
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
