import React, { memo, useCallback } from 'react';
import { string, func, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import { filmPropTypes } from '../../prop-types/film';
import cx from 'classnames';
import { changeGenre } from '../../store/action';

function GenreList({ films, onChangeGenre, currentGenre, defaultGenge }) {
  const genresList = [defaultGenge, ...new Set(films.map(({ genre }) => genre))];

  const handleFilmsFilteredClick = useCallback(
    (evt, genre) => {
      evt.preventDefault();
      onChangeGenre(genre);
    },
    [onChangeGenre],
  );

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
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

const mapStateToProps = ({ filmsReducer }) => ({
  currentGenre: filmsReducer.currentGenre,
  films: filmsReducer.films,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(changeGenre({
      payload: genre,
    }));
  },
});

GenreList.propTypes = {
  films: arrayOf(filmPropTypes),
  currentGenre: string.isRequired,
  defaultGenge: string.isRequired,
  onChangeGenre: func.isRequired,
};

export { GenreList };
export default memo(connect(mapStateToProps, mapDispatchToProps)(GenreList));
