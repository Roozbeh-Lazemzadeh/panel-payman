import { AxiosRequestConfig } from 'axios';

export type AuthLoginPostRequest = {
  data: { phoneNumber: string };
  axiosConfig?: AxiosRequestConfig;
};

export type AuthLoginPostResponse = { message: string };
