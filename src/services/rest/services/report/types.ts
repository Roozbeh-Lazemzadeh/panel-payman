import { AxiosRequestConfig } from 'axios';

export type APICallsReportGetQuery = {
  Banks?: string[];
  Status?: string[];
  Service?: string[];
  RequestDateFrom?: string;
  RequestDateTo?: string;
};

type APICallsReport = {
  Id: string;
  BankTitle: string;
  Service: string;
  IsSucceed: boolean;
  ProcessTime: string;
  RequestDate: string;
  RequestTime: string;
};

export type APICallsReportGetRequest = {
  queryParams: APICallsReportGetQuery;
  axiosConfig?: AxiosRequestConfig;
};

export type APICallsReportGetResponse = {
  result: APICallsReport[];
};
