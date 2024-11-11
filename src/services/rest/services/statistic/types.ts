import { AxiosRequestConfig } from 'axios';

export type APICallsStatisticGetQuery = {
  Banks?: string[];
  Service?: string[];
  RequestDateFrom?: string;
  RequestDateTo?: string;
};

type APICallsStatistic = {
  Id: string;
  BankTitle: string;
  Service: string;
  SucceededCount: number;
  FailedCount: number;
  TotalCount: number;
};

export type APICallsStatisticGetRequest = {
  queryParams: APICallsStatisticGetQuery;
  axiosConfig?: AxiosRequestConfig;
};

export type APICallsStatisticGetResponse = {
  result: APICallsStatistic[];
};
