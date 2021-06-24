import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ActionCreator } from '../../store/action';
import { FILM_GENRE } from '../../const';

function GenreList({ filmsAll, onFilmsFiltered, onChangeGenre, filterGenre }) {
  const genres = Array.from(new Set(filmsAll.map(({ genre }) => genre)));
  genres.unshift(FILM_GENRE);

  const handleFilmsFilteredClick = (evt, genre) => {
    evt.preventDefault();
    onChangeGenre(genre);
    onFilmsFiltered(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={`genre-${genre}`}
          className={cx('catalog__genres-item', { 'catalog__genres-item--active': genre === filterGenre })}
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
  filterGenre: state.filterGenre,
  filmsAll: state.filmsAll,
  genreList: state.genreList,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmsFiltered(genre) {
    dispatch(ActionCreator.filmsFiltered({
      payload: genre,
    }));
  },
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre({
      payload: genre,
    }));
  },
});

const { arrayOf, shape, number, string, func } = PropTypes;

GenreList.propTypes = {
  filmsAll: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      image: string.isRequired,
      videoLink: string.videoLink,
    }),
  ).isRequired,
  onFilmsFiltered: func.isRequired,
  onChangeGenre: func.isRequired,
  filterGenre: string.isRequired,
};

export { GenreList };
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
