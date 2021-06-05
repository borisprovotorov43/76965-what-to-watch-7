import React from 'react';
import PropTypes from 'prop-types';

function FilmCard({title, image, url}) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={url}>{title}</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FilmCard;
