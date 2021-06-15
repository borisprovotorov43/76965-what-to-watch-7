import React, { useState } from 'react';

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

  function renderRatingInput () {
    const ratingInputs = [];
    for (let i = 10; i > 0; i--) {
      ratingInputs.push(
        <React.Fragment key={`rating-${i}`}>
          <input
            id={`star-${i}`}
            className="rating__input"
            onChange={handleChangeRating}
            type="radio"
            name="rating"
            value={i}
            {...(i === 8 && { checked: true })}
          />
          <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
        </React.Fragment>,
      );
    }
    return ratingInputs;
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {renderRatingInput()}
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
