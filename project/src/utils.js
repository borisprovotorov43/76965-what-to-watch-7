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