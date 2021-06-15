import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card';

function FilmList({ films }) {
  const [activeFilm, setActiveFilm] = useState(0);

  const onActiveFilmSet = (value) => setActiveFilm(value);

  return (
    <div className="catalog__films-list">
      {
        films.map(({ id, title, image })  => (
          <SmallFilmCard
            id={id}
            key={`pc${id}`}
            title={title}
            image={image}
            onActiveFilmSet={onActiveFilmSet}
            activeFilm={activeFilm}
          />
        ))
      }
    </div>
  );
}

const { string, number, shape, arrayOf } = PropTypes;

FilmList.propTypes = {
  films: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      image: string.isRequired,
    }),
  ).isRequired,
};

export default FilmList;
