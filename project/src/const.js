export const AppRoutes = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILMS: '/films',
  REVIEW: '/review',
  DEV_FILM: '/films/:id',
  DEV_ADD_REVIEW: '/films/:id/review',
  DEV_PLAYER: '/player/:id',
};

export const ApiRoutes = {
  FILM_PROMO: '/promo',
  FILMS: '/films',
  FILMS_SIMILAR: '/similar',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
  FAVORITE: '/favorite',
};

export const TAB_DEFAULT = 'Overview';
export const TABS_LIST = ['Overview', 'Details', 'Reviews'];

export const RAITING_DEFAULT = 8;
export const FILMS_PER_PAGE = 8;
export const MAX_RAITING_VALUE = 10;
export const DEFAULT_GENGE = 'All genres';

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};
