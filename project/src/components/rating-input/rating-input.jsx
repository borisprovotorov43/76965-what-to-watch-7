import React from 'react';
import PropTypes from 'prop-types';
import { RAITIND_DEFAULT, MAX_RAITING_VALUE } from '../../const';

function RatingInput({ onHandleRatingChange }) {
  return(
    <>
      {Array(MAX_RAITING_VALUE).fill(0).map((it, i) => (
        <React.Fragment key={`rating-${MAX_RAITING_VALUE - i}`}>
          <input
            id={`star-${MAX_RAITING_VALUE - i}`}
            className="rating__input"
            type="radio" name="rating"
            value={MAX_RAITING_VALUE - i}
            defaultChecked={MAX_RAITING_VALUE - i === RAITIND_DEFAULT}
            onChange={onHandleRatingChange}
          />
          <label className="rating__label" htmlFor={`star-${MAX_RAITING_VALUE - i}`}>Rating</label>
        </React.Fragment>
      ))}
    </>
  );
}

const { func } = PropTypes;

RatingInput.propTypes = {
  onHandleRatingChange: func.isRequired,
};

export default RatingInput;
