import React, { memo, useState } from 'react';
import { arrayOf } from 'prop-types';
import { filmPropTypes } from '../../prop-types/film';
import { FILMS_PER_PAGE } from '../../const';
import SmallFilmCard from '../small-film-card/small-film-card';
import Spinner from '../spinner/spinner';
import ShowMore from '../show-more/show-more';

function FilmList({ films }) {
  const [activeFilm, setActiveFilm] = useState(true);
  const [filmsPageCounter, setFilmsPageCounter] = useState(1);

  const handleActiveFilmSet = (value) => setActiveFilm(value);
  const handleShowMoreClick = () => setFilmsPageCounter((prev) => prev + 1);

  const filmFiltered = films.slice(0, (filmsPageCounter * FILMS_PER_PAGE));
  const isShowButtonShown = !(filmFiltered.length >= films.length);

  if (filmFiltered.length > 0) {
    return (
      <>
        <div className="catalog__films-list">
          {filmFiltered.map(({ id, name, previewImage, previewVideoLink }) => (
            <SmallFilmCard
              id={id}
              key={`pc${id}`}
              name={name}
              previewImage={previewImage}
              onActiveFilmSet={handleActiveFilmSet}
              activeFilm={id === activeFilm}
              previewVideoLink={previewVideoLink}
            />
          ))}
        </div>
        {isShowButtonShown && <ShowMore onHandleShowMoreClick={handleShowMoreClick} />}
      </>
    );
  }

  return <Spinner />;
}

FilmList.propTypes = {
  films: arrayOf(filmPropTypes),
};

export default memo(FilmList);
