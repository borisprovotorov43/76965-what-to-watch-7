import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function SmallFilmCard({ id, title, image, onHandleHover, activeFilmCard }) {

  return (
    <article className={`small-film-card catalog__films-card ${activeFilmCard === id && 'active'}`}
      onMouseEnter={() => onHandleHover(id)}
      onMouseLeave={() => onHandleHover(0)}
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

SmallFilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onHandleHover: PropTypes.func.isRequired,
  activeFilmCard: PropTypes.number.isRequired,
};

export default SmallFilmCard;
