import { AxiosRequestConfig } from 'axios';

export type PaymansStatisticGetQuery = {
  Banks?: string[];
  GroupPaymansType?: string;
  PaymanStartDate?: string[];
  PaymanEndDate?: string[];
};

type PaymansStatistic = {
  Id: string;
  SourceBankName: string;
  PaymanStartDate: string;
  TotalCount: string;
  CreatingPaymans: string;
  AwaitingConfirmPaymans: string;
  ActivePaymans: string;
  CanceledPaymans: string;
  InactivePaymans: string;
  ExpiredPaymans: string;
};

export type PaymansStatisticGetRequest = {
  queryParams: PaymansStatisticGetQuery;
  axiosConfig?: AxiosRequestConfig;
};

export type PaymansStatisticGetResponse = {
  result: PaymansStatistic[];
};
