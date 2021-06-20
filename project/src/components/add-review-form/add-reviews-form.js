import React, { useState } from 'react';
import Rating from '../rating/rating';

function AddReviewsForm() {
  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });

  function handleRatingChange({ target: { value } }) {
    setFormData({
      ...formData,
      rating: value,
    });
  }

  function handleReviewTextChange({ target: { value } }) {
    setFormData({
      ...formData,
      reviewText: value,
    });
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <Rating onHandleRatingChange={handleRatingChange} />
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" onChange={handleReviewTextChange} placeholder="Review text" />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewsForm;
