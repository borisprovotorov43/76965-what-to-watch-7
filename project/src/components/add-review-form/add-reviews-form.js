import React, { useState } from 'react';
import camelize from 'camelize';
import { func, number, string } from 'prop-types';
import { connect } from 'react-redux';
import { postComment } from '../../store/api-actions';
import Rating from '../rating/rating';
import ErrorMessageReviews from '../error-message-reviews/error-message-reviews';

function AddReviewsForm({
  filmId,
  errorCode,
  onPostComment,
}) {
  const [formData, setFormData] = useState({ rating: 0, comment: '' });
  const [isValidateData, setValidateData] = useState(false);
  const { rating, reviewText } = formData;

  function handleFieldChange (evt) {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [camelize(name)]: value,
    });
  }

  function handleFieldBlur () {
    if (rating && (reviewText.length >= 50 && reviewText.length <= 400)) {
      setValidateData(true);
    } else {
      setValidateData(false);
    }
  }

  function handleFieldSubmit (evt) {
    evt.preventDefault();
    onPostComment(filmId, {rating, comment: reviewText});
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFieldSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <Rating
              onHandleRatingChange={handleFieldChange}
              onHandleFieldBlur={handleFieldBlur}
            />
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!isValidateData}
            >
              Post
            </button>
          </div>
        </div>
        {errorCode && <ErrorMessageReviews errorCode={errorCode} />}
      </form>
    </div>
  );
}

AddReviewsForm.propTypes = {
  filmId: string.isRequired,
  errorCode: number,
  onPostComment: func.isRequired,
};

const mapStateToProps = ({ reviewsReducer }) => ({
  errorCode: reviewsReducer.filmComments.errorCode,
});

const mapDispatchToProps = (dispatch) => ({
  onPostComment(id, comment) {
    dispatch(postComment(id, comment));
  },
});

export { AddReviewsForm };
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewsForm);

