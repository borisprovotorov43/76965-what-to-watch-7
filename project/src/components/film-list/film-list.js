import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card';

function FilmList({ films }) {

  const [activeFilmCard, setActiveFilmCard] = useState(0);

  const setActiveFilm = (value) => {
    setActiveFilmCard(value);
  };

  return (
    <div className="catalog__films-list">
      {
        films.map(({ id, title, image })  => (
          <SmallFilmCard
            id={id}
            key={`pc${id}`}
            title={title}
            image={image}
            onActiveFilmSet={setActiveFilm}
            activeFilmCard={activeFilmCard}
          />
        ))
      }
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FilmList;
