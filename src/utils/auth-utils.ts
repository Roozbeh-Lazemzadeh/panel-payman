import Cookies from 'js-cookie';
import { authLogoutPostFn } from 'services/rest/auth/logout';
import { authOtpPostFn } from 'services/rest/auth/otp';
import { authRefreshPostFn } from 'services/rest/auth/refresh';
import store from 'store';
import { authAtom } from 'store/auth-atoms';

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export const ACCESS_TOKEN_COOKIE_NAME = '__access_token';
export const REFRESH_TOKEN_COOKIE_NAME = '__refresh_token';

// export const updateAuthCookie = ({ accessToken, refreshToken }: AuthTokens) => {
//   // set access token
//   const accessTokenExpires = new Date();
//   accessTokenExpires.setMonth(accessTokenExpires.getMonth() + 6);

//   Cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, {
//     sameSite: 'lax',
//     expires: accessTokenExpires,
//     path: '/'
//   });

//   // set refresh token
//   const refreshTokenExpires = new Date();
//   refreshTokenExpires.setMonth(refreshTokenExpires.getMonth() + 12);

//   Cookies.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
//     sameSite: 'lax',
//     expires: refreshTokenExpires,
//     path: '/'
//   });

//   // set to state manager
//   store.set(authAtom, { loginStatus: 'is-logged-in', accessToken });
// };

export const getAuthCookie = () => {
  const accessToken = Cookies.get(ACCESS_TOKEN_COOKIE_NAME);
  const refreshToken = Cookies.get(REFRESH_TOKEN_COOKIE_NAME);

  return { accessToken, refreshToken };
};

export const login = async (phoneNumber: string, code: string) => {
  void (await authOtpPostFn({
    data: { code, phone_number: phoneNumber, isPersistent: true }
  }));

  const { accessToken, refreshToken } = getAuthCookie();

  store.set(authAtom, {
    loginStatus: 'is-logged-in',
    accessToken,
    refreshToken
  });
};

export const refreshToken = async () => {
  const { refreshToken } = getAuthCookie();

  if (!refreshToken) return;

  store.set(authAtom, { loginStatus: 'unset' });

  void (await authRefreshPostFn({
    data: { refresh_token: refreshToken }
  }));

  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    getAuthCookie();

  store.set(authAtom, {
    loginStatus: 'is-logged-in',
    accessToken: newAccessToken,
    refreshToken: newRefreshToken
  });

  return { access_token: newAccessToken, refresh_token: newRefreshToken };
};

export const logout = async () => {
  void (await authLogoutPostFn({}));
  store.set(authAtom, {
    loginStatus: 'is-logged-out',
    accessToken: '',
    refreshToken: ''
  });
};
