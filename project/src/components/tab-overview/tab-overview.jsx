import React from 'react';
import { filmPropTypes } from '../../prop-types/film';
import { getRatingName } from '../../utils';

function TabOverview({
  film: {
    description,
    scoresCount,
    rating,
    starring,
    director,
  }}) {

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingName(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')} </strong>
        </p>
      </div>
    </>
  );
}

TabOverview.propTypes = {
  film: filmPropTypes,
};

export default TabOverview;
