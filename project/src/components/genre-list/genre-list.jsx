import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { changeGenre } from '../../store/action';

function GenreList({ films, onChangeGenre, currentGenre, defaultGenge }) {
  const genres = [defaultGenge, ...new Set(films.map(({ genre }) => genre))];

  const handleFilmsFilteredClick = (evt, genre) => {
    evt.preventDefault();
    onChangeGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
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
});

const { arrayOf, shape, number, string, func } = PropTypes;

GenreList.propTypes = {
  films: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      previewImage: string.isRequired,
      previewVideoLink: string,
    }),
  ).isRequired,
  currentGenre: string.isRequired,
  defaultGenge: string.isRequired,
  onChangeGenre: func.isRequired,
};

export { GenreList };
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
