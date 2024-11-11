import { AxiosRequestConfig } from 'axios';

export type AuthOtpPostRequest = {
  data: { phone_number: string; code: string; isPersistent: boolean };
  axiosConfig?: AxiosRequestConfig;
};
