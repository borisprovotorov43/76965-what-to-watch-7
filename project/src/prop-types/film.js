import PropTypes from 'prop-types';
const { string, number, arrayOf, shape } = PropTypes;

export const filmPropTypes = shape({
  id: number.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  backgroundImage: string.isRequired,
  posterImage: string.isRequired,
  released: number.isRequired,
  genre: string.isRequired,
  director: string.isRequired,
  rating: number.isRequired,
  scoresCount: number.isRequired,
  starring: arrayOf(string.isRequired).isRequired,
}).isRequired;
