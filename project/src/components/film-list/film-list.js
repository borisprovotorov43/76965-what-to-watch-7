import React, { useState, useEffect } from 'react';
import { arrayOf, func, number } from 'prop-types';
import { connect } from 'react-redux';
import { filmPropTypes } from '../../prop-types/film';
import SmallFilmCard from '../small-film-card/small-film-card';
import Spinner from '../spinner/spinner';
import ShowMore from '../show-more/show-more';

import { changeFilmPerPage, resetFilmPerPage } from '../../store/action';

function FilmList({ films, filmsPerPage, onChangeFilmPerPage, onResetFilmPerPage }) {
  const [activeFilm, setActiveFilm] = useState(0);
  const [filmsFiltered, setFilmFiltered] = useState([]);
  const [isShowMoreVisible, setShowMoreVisible] = useState(true);

  useEffect(() => {
    if (films.length > 0) {
      setFilmFiltered(films.slice(0, filmsPerPage));
      return (films.length <= filmsPerPage) ? setShowMoreVisible(false) : setShowMoreVisible(true);
    }

  }, [films, filmsPerPage]);

  const handleShowMoreClick = () => {
    onChangeFilmPerPage();
  };

  const handleActiveFilmSet = (value) => setActiveFilm(value);

  if (filmsFiltered.length > 0) {
    return (
      <>
        <div className="catalog__films-list">
          {filmsFiltered.map(({ id, name, previewImage, previewVideoLink }) => (
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
        {isShowMoreVisible && <ShowMore onHandleShowMoreClick={handleShowMoreClick} />}
      </>
    );
  }

  return <Spinner />;
}

const mapStateToProps = ({ filmsPerPage }) => ({
  filmsPerPage: filmsPerPage,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilmPerPage() {
    dispatch(changeFilmPerPage());
  },
  onResetFilmPerPage() {
    dispatch(resetFilmPerPage());
  },
});

FilmList.propTypes = {
  films: arrayOf(filmPropTypes),
  filmsPerPage: number.isRequired,
  onChangeFilmPerPage: func.isRequired,
  onResetFilmPerPage: func.isRequired,
};

export { FilmList };
export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
