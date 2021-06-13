import React, { useState } from 'react';

function AddReviewsForm() {

  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });

  function handleChangeRating(evt) {
    const { value } = evt.target;
    setFormData({
      ...formData,
      rating: value,
    });
  }

  function handleChangeReviewText(evt) {
    const { value } = evt.target;
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
            <input className="rating__input" id="star-10" onChange={handleChangeRating} type="radio" name="rating" value="10" />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" onChange={handleChangeRating} type="radio" name="rating" value="9" />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" onChange={handleChangeRating} type="radio" name="rating" value="8" checked />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" onChange={handleChangeRating} type="radio" name="rating" value="7" />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" onChange={handleChangeRating} type="radio" name="rating" value="6" />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" onChange={handleChangeRating} type="radio" name="rating" value="5" />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" onChange={handleChangeRating} type="radio" name="rating" value="4" />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" onChange={handleChangeRating} type="radio" name="rating" value="3" />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" onChange={handleChangeRating} type="radio" name="rating" value="2" />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" onChange={handleChangeRating} type="radio" name="rating" value="1" />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
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
