import React from 'react';
import { string, func, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import { filmPropTypes } from '../../prop-types/film';
import cx from 'classnames';
import { changeGenre, resetFilmPerPage } from '../../store/action';

function GenreList({ films, onChangeGenre, onResetFilmPerPage, currentGenre, defaultGenge }) {
  const genres = [defaultGenge, ...new Set(films.map(({ genre }) => genre))];

  const handleFilmsFilteredClick = (evt, genre) => {
    evt.preventDefault();
    onChangeGenre(genre);
    onResetFilmPerPage();
  };

  return (
    <ul className="catalog__genres-list">
      {genres && genres.map((genre) => (
        <li
          key={`genre-${genre}`}
          className={cx('catalog__genres-item', { 'catalog__genres-item--active': genre === currentGenre })}
        >
          <a
            href="#/"
            className="catalog__genres-link"
            onClick={(evt) => handleFilmsFilteredClick(evt, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(changeGenre({
      payload: genre,
    }));
  },
  onResetFilmPerPage() {
    dispatch(resetFilmPerPage());
  },
});

GenreList.propTypes = {
  films: arrayOf(filmPropTypes),
  currentGenre: string.isRequired,
  defaultGenge: string.isRequired,
  onChangeGenre: func.isRequired,
  onResetFilmPerPage: func.isRequired,
};

export { GenreList };
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
