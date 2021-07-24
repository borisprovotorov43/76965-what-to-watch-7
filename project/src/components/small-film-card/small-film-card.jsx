import React, { memo } from 'react';
import PropTypes, { bool } from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import SmallVideoPlayer from '../small-video-player/small-video-player';

function SmallFilmCard({ id, name, previewImage, onActiveFilmSet, activeFilm, previewVideoLink }) {
  const handleMouseEnter = () => onActiveFilmSet(id);
  const handleMouseLeave = () => onActiveFilmSet(false);

  return (
    <article
      className={cx('small-film-card', 'catalog__films-card')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        {!activeFilm
          ? <img src={previewImage} alt={name} width="280" height="175" />
          : <SmallVideoPlayer source={previewVideoLink} />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoutes.FILMS}/${id}`}>{name}</Link>
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
  activeFilm: bool.isRequired,
};

export default memo(SmallFilmCard);
