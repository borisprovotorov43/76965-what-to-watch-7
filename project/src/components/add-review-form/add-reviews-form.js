import React, { useEffect, useState } from 'react';
import { func, number, string } from 'prop-types';
import { connect } from 'react-redux';
import { addCommentError } from '../../store/action';
import { postComment } from '../../store/api-actions';
import Rating from '../rating/rating';
import ErrorMessage from '../error-message/error-message';

function AddReviewsForm({
  filmId,
  addCommentErrorCode,
  onPostComment,
  onAddCommentError,
}) {
  const [formData, setFormData] = useState({ rating: 0, comment: ''});
  const [isValidateData, setValidateData] = useState(false);
  const { rating, comment } = formData;

  useEffect(()=>{
    onAddCommentError();
  },[onAddCommentError]);

  useEffect(()=>{
    if (rating && (comment.length >= 50 && comment.length <= 400)) {
      setValidateData(true);
    } else {
      setValidateData(false);
    }

  }, [rating, comment]);

  function handleRatingChange({ target: { value } }) {
    setFormData({
      ...formData,
      rating: value,
    });
  }

  function handleReviewTextChange({ target: { value } }) {
    setFormData({
      ...formData,
      comment: value,
    });
  }

  function handleFieldSubmit (evt) {
    evt.preventDefault();
    onPostComment(filmId, {rating, comment});
    setValidateData(true);
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFieldSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <Rating onHandleRatingChange={handleRatingChange} />
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" onChange={handleReviewTextChange} placeholder="Review text" />
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
        {addCommentErrorCode && <ErrorMessage errorCode={addCommentErrorCode} />}
      </form>
    </div>
  );
}

AddReviewsForm.propTypes = {
  filmId: string.isRequired,
  addCommentErrorCode: number,
  onPostComment: func.isRequired,
  onAddCommentError: func.isRequired,
};

const mapStateToProps = (state) => ({
  addCommentErrorCode: state.addCommentErrorCode,
});

const mapDispatchToProps = (dispatch) => ({
  onPostComment(id, comment) {
    dispatch(postComment(id, comment));
  },
  onAddCommentError() {
    dispatch(addCommentError({
      payload: null,
    }));
  },
});

export { AddReviewsForm };
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewsForm);

