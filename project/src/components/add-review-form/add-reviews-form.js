import React, { useState } from 'react';
import RatingInput from '../rating-input/rating-input';

function AddReviewsForm() {
  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });

  function handleChangeRating({ target: { value } }) {
    setFormData({
      ...formData,
      rating: value,
    });
  }

  function handleChangeReviewText({ target: { value } }) {
    setFormData({
      ...formData,
      reviewText: value,
    });
  }

  const ratingInputs = ['10','9','8','7','6','5','4','3','2','1'];

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              ratingInputs.map((index) => (
                <RatingInput
                  key={`rating-${index}`}
                  id={index}
                  onHandleChangeRating={handleChangeRating}
                />
              ))
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" onChange={handleChangeReviewText} placeholder="Review text" />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewsForm;
