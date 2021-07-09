import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { filmPropTypes } from '../../prop-types/film';
import SmallFilmCard from '../small-film-card/small-film-card';
import Spinner from '../spinner/spinner';

function FilmList({ films }) {
  const [activeFilm, setActiveFilm] = useState(0);
  const handleActiveFilmSet = (value) => setActiveFilm(value);

  if (films.length > 0) {
    return (
      <div className="catalog__films-list">
        {films.map(({ id, name, previewImage, previewVideoLink }) => (
          <SmallFilmCard
            id={id}
            key={`pc${id}`}
            name={name}
            previewImage={previewImage}
            onActiveFilmSet={handleActiveFilmSet}
            activeFilm={activeFilm}
            previewVideoLink={previewVideoLink}
          />
        ))}
      </div>
    );
  }

  return <Spinner />;
}

const { arrayOf } = PropTypes;

FilmList.propTypes = {
  films: arrayOf(filmPropTypes),
};

export default FilmList;
