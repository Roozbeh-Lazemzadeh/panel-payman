import {
  TransactionsReportGetRequest,
  TransactionsReportGetResponse
} from './types';
import { client } from 'services/clients';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import mock from './mock';
import delayed from 'utils/delayed';

const isMock = true;

const transactionsReportGetURL = () => {
  return `/transactions/reports`;
};

export const transactionsReportGetFn = async (
  request: TransactionsReportGetRequest
) => {
  if (isMock) return delayed(mock, 1000);

  const { data } = await client.request<TransactionsReportGetResponse>({
    method: 'GET',
    url: transactionsReportGetURL(),
    params: request.queryParams,
    ...request.axiosConfig
  });

  return data;
};

export const reportsGetKeygen = (request?: TransactionsReportGetRequest) => {
  return [transactionsReportGetURL(), request].filter(Boolean) as QueryKey;
};

export const useTransactionsReportGetQuery = (
  request: TransactionsReportGetRequest,
  options?: Omit<
    UseQueryOptions<TransactionsReportGetResponse>,
    'queryKey' | 'queryFn'
  >
) => {
  const query = useQuery({
    queryKey: reportsGetKeygen(request),
    queryFn: () => transactionsReportGetFn(request),
    ...options
  });

  return query;
};
