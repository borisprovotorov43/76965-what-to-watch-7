import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function SmallFilmCard({ id, title, image, onActiveFilmSet, activeFilm }) {
  const handleMouseEnter = () => onActiveFilmSet(id);
  const handleMouseLeave = () => onActiveFilmSet(0);

  return (
    <article className={cx('small-film-card', 'catalog__films-card', { 'active': activeFilm === id })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FILMS}/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

const { string, number, func } = PropTypes;

SmallFilmCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  image: string.isRequired,
  onActiveFilmSet: func.isRequired,
  activeFilm: number.isRequired,
};

export default SmallFilmCard;
