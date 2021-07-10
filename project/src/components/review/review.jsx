import React from 'react';
import { reviewsTypes } from '../../prop-types/reviews';
import { getReviewDate } from '../../utils';

function Review({ review: { comment, date, rating, user: { name } } }) {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-24">{getReviewDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

Review.propTypes = {
  review: reviewsTypes,
};

export default Review;
