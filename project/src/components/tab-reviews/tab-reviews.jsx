import React, { useEffect } from 'react';
import { arrayOf, func, objectOf, string } from 'prop-types';
import { reviewsTypes } from '../../prop-types/reviews';
import Review from '../review/review';
import { connect } from 'react-redux';
import { fetchCommentsFilm } from '../../store/api-actions';

function TabReviews({ filmId, filmComments, onFetchCommentsFilm }) {
  const { commentsData } = filmComments;

  useEffect(()=>{
    onFetchCommentsFilm(filmId);
  },[filmId, onFetchCommentsFilm]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {commentsData && commentsData.map((review) => (
          <Review
            review={review}
            key={`review-${review.id}`}
          />))}
      </div>
    </div>
  );
}

TabReviews.propTypes = {
  filmId: string,
  onFetchCommentsFilm: func,
  filmComments: objectOf(arrayOf(reviewsTypes)),
};

const mapStateToProps = ({ filmComments }) => ({ filmComments });

const mapDispatchToProps = (dispatch) => ({
  onFetchCommentsFilm(id, comment) {
    dispatch(fetchCommentsFilm(id, comment));
  },
});

export { TabReviews };
export default connect(mapStateToProps, mapDispatchToProps)(TabReviews);
