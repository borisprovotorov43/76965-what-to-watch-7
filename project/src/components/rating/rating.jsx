import React from 'react';
import PropTypes from 'prop-types';
import { RATING_DEFAULT, MAX_RATING_VALUE } from '../../const';

function Rating({ onHandleRatingChange, onHandleFieldBlur }) {
  return (
    Array(MAX_RATING_VALUE).fill(0).map((it, i) => (
      <React.Fragment key={`rating-${MAX_RATING_VALUE - i}`}>
        <input
          id={`star-${MAX_RATING_VALUE - i}`}
          className="rating__input"
          type="radio" name="rating"
          value={MAX_RATING_VALUE - i}
          defaultChecked={MAX_RATING_VALUE - i === RATING_DEFAULT}
          onChange={onHandleRatingChange}
          onBlur={onHandleFieldBlur}
        />
        <label className="rating__label" htmlFor={`star-${MAX_RATING_VALUE - i}`}>Rating</label>
      </React.Fragment>
    ))
  );
}

const { func } = PropTypes;

Rating.propTypes = {
  onHandleRatingChange: func.isRequired,
  onHandleFieldBlur: func.isRequired,
};

export default Rating;
