import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card';
import Spinner from '../spinner/spinner';

function FilmList({ films, isDataLoaded }) {
  const [activeFilm, setActiveFilm] = useState(0);
  const handleActiveFilmSet = (value) => setActiveFilm(value);

  if (!isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="catalog__films-list">
      {
        films.map(({ id, name, previewImage, previewVideoLink }) => (
          <SmallFilmCard
            id={id}
            key={`pc${id}`}
            name={name}
            previewImage={previewImage}
            onActiveFilmSet={handleActiveFilmSet}
            activeFilm={activeFilm}
            previewVideoLink={previewVideoLink}
          />
        ))
      }
    </div>
  );
}

const { string, number, bool, shape, arrayOf } = PropTypes;

FilmList.propTypes = {
  films: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      previewImage: string.isRequired,
      previewVideoLink: string.isRequired,
    }),
  ).isRequired,
  isDataLoaded: bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});


export default connect(mapStateToProps, null)(FilmList);
