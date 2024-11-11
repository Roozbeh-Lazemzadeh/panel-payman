import { AxiosRequestConfig } from 'axios';

export type ReportsGetRequest = {
  queryParams: { range: 'daily' | 'weekly' | 'monthnly' };
  pathParams: { report_type: 'transactions' | 'paymans' };
  axiosConfig?: AxiosRequestConfig;
};

export type ReportsGetResponse = {
  result: {
    id: string;
    title: string;
    updated_at: string;
    amount: number;
    alert: string;
  }[];
};
