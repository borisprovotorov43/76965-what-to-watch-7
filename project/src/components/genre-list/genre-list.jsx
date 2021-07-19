import React, { memo, useCallback } from 'react';
import { string, func, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import { filmPropTypes } from '../../prop-types/film';
import cx from 'classnames';
import { changeGenre } from '../../store/action';
import { getCurrentGenre, getFilms } from '../../store/selectors';

function GenreList({ films, onChangeGenre, currentGenre, defaultGenge }) {

  const getGenres = useCallback(
    (value) => [defaultGenge, ...new Set(value.map(({ genre }) => genre))],
    [defaultGenge],
  );

  const handleFilmsFilteredClick = useCallback(
    (evt, genre) => {
      evt.preventDefault();
      onChangeGenre(genre);
    },
    [onChangeGenre],
  );

  return (
    <ul className="catalog__genres-list">
      {getGenres(films).map((genre) => (
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
  currentGenre: getCurrentGenre(state),
  films: getFilms(state),
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
