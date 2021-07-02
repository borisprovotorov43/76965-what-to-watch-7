import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../const';
import VideoPlayer from '../video-player/video-player';

function SmallFilmCard({ id, name, previewImage, onActiveFilmSet, activeFilm, previewVideoLink }) {
  const handleMouseEnter = () => onActiveFilmSet(id);
  const handleMouseLeave = () => onActiveFilmSet(0);

  return (
    <article
      className={cx('small-film-card', 'catalog__films-card')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        {activeFilm !== id
          ? <img src={previewImage} alt={name} width="280" height="175" />
          : <VideoPlayer source={previewVideoLink} />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${APP_ROUTES.FILMS}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

const { string, number, func } = PropTypes;

SmallFilmCard.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  previewImage: string.isRequired,
  previewVideoLink: string.isRequired,
  onActiveFilmSet: func.isRequired,
  activeFilm: number.isRequired,
};

export default SmallFilmCard;
