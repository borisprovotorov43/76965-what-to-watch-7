import PropTypes from 'prop-types';
const { string, number, array, arrayOf, shape } = PropTypes;

export const filmPropTypes = arrayOf(
  shape({
    id: number.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    previewImage: string.isRequired,
    backgroundImage: string.isRequired,
    posterImage: string.isRequired,
    released: number.isRequired,
    genre: string.isRequired,
    director: string.isRequired,
    rating: number.isRequired,
    scoresCount: number.isRequired,
    starring: array.isRequired,
  }),
).isRequired;
