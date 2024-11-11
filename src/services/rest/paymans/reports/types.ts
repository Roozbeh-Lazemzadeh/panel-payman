import { AxiosRequestConfig } from 'axios';

export type PaymansReportGetQuery = {
  Debtor?: string;
  Banks?: string[];
  MandateStatus?: string;
  Umr?: string;
  TraceId?: string;
  FromPaymanDate?: string[];
  ToPaymanDate?: string[];
};

type PaymansReport = {
  Id: string;
  Name: string;
  NationalCode: string;
  PhoneNumber: string;
  SourceBankName: string;
  Status: string;
  Umr: string;
  TraceId: string;
  PaymanStartDate: string;
  PaymanEndDate: string;
};

export type PaymansReportGetRequest = {
  queryParams: PaymansReportGetQuery;
  axiosConfig?: AxiosRequestConfig;
};

export type PaymansReportGetResponse = {
  result: PaymansReport[];
};
