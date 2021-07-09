import React from 'react';
import PropTypes from 'prop-types';
import { filmPropTypes } from '../../prop-types/film';
import { reviewsTypes } from '../../prop-types/reviews';
import Review from '../review/review';

import { getFilmReviews } from '../../utils';

function TabReviews({ film: { id }, reviews}) {
  const filmReviews = getFilmReviews(reviews, id);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviews.map((review) => (
          <Review
            review={review}
            key={String(review.user.id) + review.date}
          />))}
      </div>
    </div>
  );
}

const { arrayOf } = PropTypes;

TabReviews.propTypes = {
  film: filmPropTypes,
  reviews: arrayOf(reviewsTypes),
};

export default TabReviews;
