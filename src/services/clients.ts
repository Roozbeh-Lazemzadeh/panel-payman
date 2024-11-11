import axios from 'axios';
import store from 'store';
import { authAtom } from 'store/auth-atoms';
import { getAuthCookie, refreshToken } from 'utils/auth-utils';

export const client = axios.create({ baseURL: 'http://192.168.40.10:8082/' });

client.interceptors.request.use((config) => {
  const { accessToken } = getAuthCookie();

  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

client.interceptors.response.use(
  async (response) => {
    if (response.status !== 401) return response;

    const { refreshToken: refreshTokenCookie } = getAuthCookie();

    if (!refreshTokenCookie) return response;

    const { access_token, refresh_token } = (await refreshToken()) ?? {};

    if (!access_token || !refresh_token) return response;

    store.set(authAtom, {
      loginStatus: 'is-logged-in',
      accessToken: access_token,
      refreshToken: refresh_token
    });

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
