import React from 'react';
import { func } from 'prop-types';

function ShowMore({ onHandleShowMoreClick }) {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onHandleShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
}

ShowMore.propTypes = {
  onHandleShowMoreClick: func.isRequired,
};

export default ShowMore;
