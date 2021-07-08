import React, { useState } from 'react';
import { filmPropTypes } from '../../prop-types/films';
import SmallFilmCard from '../small-film-card/small-film-card';
import Spinner from '../spinner/spinner';

function FilmList({ films }) {
  const [activeFilm, setActiveFilm] = useState(0);
  const handleActiveFilmSet = (value) => setActiveFilm(value);

  return (
    <div className="catalog__films-list">
      {films.length === 0 ? <Spinner /> :films.map(({ id, name, previewImage, previewVideoLink }) => (
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

FilmList.propTypes = {
  films: filmPropTypes,
};

export default FilmList;
