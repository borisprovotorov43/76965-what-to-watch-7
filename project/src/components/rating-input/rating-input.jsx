import React from 'react';
import PropTypes from 'prop-types';
import { RAITIND_DEFAULT } from '../../const';

function RatingInput({ id, onHandleChangeRating }) {
  return (
    <>
      <input
        id={`star-${id}`}
        className="rating__input"
        type="radio"
        name="rating"
        value={id}
        defaultChecked={+id === RAITIND_DEFAULT}
        onChange={onHandleChangeRating}
      />
      <label className="rating__label" htmlFor={`star-${id}`}>Rating </label>
    </>
  );
}

const { number, func } = PropTypes;

RatingInput.propTypes = {
  id: number.isRequired,
  onHandleChangeRating: func.isRequired,
};

export default RatingInput;
