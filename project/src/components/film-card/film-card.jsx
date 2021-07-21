import { func } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { promofilmPropTypes } from '../../prop-types/promoFilm';
import PageHeader from '../page-header/page-header';

function FilmCard({ promoFilm, onHandleFavoriteClick }) {
  const { id, backgroundImage, posterImage, name, genre, date, isFavorite } = promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <PageHeader className="film-card__head" />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{date}</span>
            </p>

            <div className="film-card__buttons">
              <Link className="btn btn--play film-card__button" to={`/player/${id}`}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>
              <button className="btn btn--list film-card__button" type="button" onClick={onHandleFavoriteClick}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  {isFavorite ? <use xlinkHref="#in-list" /> : <use xlinkHref="#add" />}
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FilmCard.propTypes = {
  promoFilm: promofilmPropTypes,
  onHandleFavoriteClick: func,
};

export default FilmCard;
