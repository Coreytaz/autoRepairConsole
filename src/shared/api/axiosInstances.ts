import axios from 'axios';

// import { errorHandler, requestHandler, responseHandler } from './interceptors';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// export const apiRequestInterceptor = api.interceptors.request.use(requestHandler);
// export const apiResponseInterceptor = api.interceptors.response.use(responseHandler, errorHandler);
