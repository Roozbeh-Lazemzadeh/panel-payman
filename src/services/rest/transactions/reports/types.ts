import { AxiosRequestConfig } from 'axios';

export type TransactionsReportGetQuery = {
  Debtor?: string;
  Banks?: string[];
  TransactionStatus?: string[];
  MandateStatus?: string[];
  FromTransactionDate?: string;
  ToTransactionDate?: string;
  TraceId?: string;
  ReferenceId?: string;
  Umr?: string;
  FromTransactionAmount?: string;
  ToTransactionAmount?: string;
};

type TransactionsReport = {
  Id: string;
  Name: string;
  NationalCode: string;
  PhoneNumber: string;
  SourceBankName: string;
  Status: string;
  Umr: string;
  ReferenceId: string;
  TransactionAmount: number;
  TraceId: string;
  TransactionTime: string;
  TransactionDate: string;
};

export type TransactionsReportGetRequest = {
  queryParams: TransactionsReportGetQuery;
  axiosConfig?: AxiosRequestConfig;
};

export type TransactionsReportGetResponse = {
  result: TransactionsReport[];
};
