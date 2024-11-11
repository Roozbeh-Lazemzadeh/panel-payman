import { AxiosRequestConfig } from 'axios';

export type TransactionsStatisticGetQuery = {
  Banks?: string[];
  GroupTransactionType?: string;
  FromDate?: string;
  ToDate?: string;
  FromAmount?: string;
  ToAmount?: string;
};

type TransactionsStatistic = {
  SourceBankName: string;
  TransactionStartingDate: string;
  TransactionEndingDate: string;
  TotalAmount: number;
  TotalCount: number;
  SucceededTransactionsCount: number;
  FailedTransactionsCount: number;
  BalanceFailedTransactionsCount: number;
  OtherFailedTransactionsCount: number;
  UnknownTransactionsCount: number;
};

export type TransactionsStatisticGetRequest = {
  queryParams: TransactionsStatisticGetQuery;
  axiosConfig?: AxiosRequestConfig;
};

export type TransactionsStatisticGetResponse = {
  result: TransactionsStatistic[];
};
