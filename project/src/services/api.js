import axios from 'axios';

const BASE_URL = 'https://7.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;
const token = localStorage.getItem('token') ?? '';

const HttpCode = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
