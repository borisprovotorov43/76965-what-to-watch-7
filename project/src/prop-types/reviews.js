import { string, number, shape } from 'prop-types';

export const reviewsTypes = shape({
  id: number.isRequired,
  user: shape({
    id: number.isRequired,
    name: string.isRequired,
  }).isRequired,
  rating: number.isRequired,
  comment: string.isRequired,
  date: string.isRequired,
}).isRequired;
