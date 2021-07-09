import { AUTHORIZATION_STATUS } from './const';

export function getRatingName(ratingNumber) {
  if (ratingNumber === 10) {
    return 'Awesome';
  } else if (ratingNumber >= 8) {
    return 'Very good';
  } else if (ratingNumber >= 5) {
    return 'Good';
  } else if (ratingNumber >= 3) {
    return 'Normal';
  } else {
    return 'Bad';
  }
}

export function getFormatedFilmRunTime(runTime) {
  const hour = Math.floor(runTime / 60);
  const minute = runTime - hour * 60;
  return `${hour}h ${minute}m`;
}

export function getCurrentFilm(films, id) {
  return films.filter((item) => item.id === +id && item);
}

export function getFilmsByGenre(films, currentGenre) {
  return films.filter((item) => item.genre === currentGenre);
}

export function getFilmReviews(reviews, id) {
  return reviews.filter((item) => item.id === id);
}

export function isCheckoutAuth(authorizationStatus) {
  return authorizationStatus === AUTHORIZATION_STATUS.UNKNOWN;
}

export function getReviewDate(date) {
  return new Date(date).toLocaleDateString(
    'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
}

