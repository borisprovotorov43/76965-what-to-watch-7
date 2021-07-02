import PropTypes from 'prop-types';
const { string, shape } = PropTypes;

export const promofilmPropTypes = shape({
  name: string,
  genre: string,
  date: string,
  backgroundImage: string,
  posterImage: string,
}).isRequired;
