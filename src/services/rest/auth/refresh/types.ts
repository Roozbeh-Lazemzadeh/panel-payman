import { AxiosRequestConfig } from 'axios';

export type AuthRefreshPostRequest = {
  data: { refresh_token: string };
  axiosConfig?: AxiosRequestConfig;
};
