import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

function SmallFilmCard({ id, title, image, onActiveFilmSet, activeFilm, videoLink }) {
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
          ? <img src={image} alt={title} width="280" height="175" />
          : <VideoPlayer videoLink={videoLink} />}
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
  videoLink: string.isRequired,
  onActiveFilmSet: func.isRequired,
  activeFilm: number.isRequired,
};

export default SmallFilmCard;
