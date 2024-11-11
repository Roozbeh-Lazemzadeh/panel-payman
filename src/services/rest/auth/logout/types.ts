import { AxiosRequestConfig } from 'axios';

export type AuthLogoutPostRequest = {
  axiosConfig?: AxiosRequestConfig;
};

export type AuthLogoutPostResponse = { message: string };
