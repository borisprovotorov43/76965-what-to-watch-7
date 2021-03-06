import { AuthorizationStatus } from './const';
import { HttpCode } from './services/api';

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

export function getErrorMessageText(errorCode) {
  switch (errorCode) {
    case HttpCode.BAD_REQUEST:
      return 'Bad request to server';
    case HttpCode.UNAUTHORIZED:
      return 'Authorization is required';
    default:
      return 'Unknown error';
  }
}

export function getFormatedFilmRunTime(runTime) {
  const hour = Math.floor(runTime / 60);
  const minute = runTime - hour * 60;
  return `${hour}h ${minute}m`;
}

export function getFilmsByGenre(films, currentGenre) {
  return films.filter((item) => item.genre === currentGenre);
}

export function isCheckoutAuth(authorizationStatus) {
  return authorizationStatus === AuthorizationStatus.UNKNOWN;
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

export const getTimeVideo = (duration, currentTime) => {
  const elapsedTime = Math.floor(duration - currentTime);

  const hours = Math.floor(elapsedTime / 60 / 60);
  const minutes = Math.floor(elapsedTime / 60) - (hours * 60);
  const seconds = elapsedTime % 60;

  return elapsedTime > 3600 ? `${hours}:${minutes}:${seconds}`: `${minutes}:${seconds}`;
};
