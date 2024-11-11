import { AxiosRequestConfig } from 'axios';

export type TransactionsRefundGetQuery = {
  Debtor?: string;
  Banks?: string[];
  TransactionStatus?: string[];
  MandateStatus?: string[];
  TraceId?: string;
  RefundId?: string;
  ReferenceId?: string;
  Umr?: string;
  FromTransactionDate?: string;
  ToTransactionDate?: string;
  FromTransactionAmount?: string;
  ToTransactionAmount?: string;
  Description?: string;
};

type TransactionsRefund = {
  Id: string;
  Name: string;
  NationalCode: string;
  PhoneNumber: string;
  SourceBankName: string;
  DestinationBank: string;
  MandateStatus: string;
  Status: string;
  Umr: string;
  Deposit: string;
  TransactionAmount: number;
  RefundId: string;
  TransactionTime: string;
  TransactionDate: string;
  Description: string;
};

export type TransactionsRefundGetRequest = {
  queryParams: TransactionsRefundGetQuery;
  axiosConfig?: AxiosRequestConfig;
};

export type TransactionsRefundGetResponse = {
  result: TransactionsRefund[];
};
