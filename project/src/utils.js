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

export function getCurrentFilm(films, id) {
  return films.filter((item) => item.id === +id && item);
}

export function getFilmsByGenre(films, currentGenre) {
  return films.filter((item) => item.genre === currentGenre);
}
