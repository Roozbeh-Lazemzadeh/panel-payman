import { client } from 'services/clients';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import mock from './mock';
import delayed from 'utils/delayed';
import {
  TransactionsRefundGetRequest,
  TransactionsRefundGetResponse
} from './types';

const isMock = true;

const transactionsRefundGetURL = () => {
  return `/transactions/reports/refund`;
};

export const transactionsRefundGetFn = async (
  request: TransactionsRefundGetRequest
) => {
  if (isMock) return delayed(mock, 1000);

  const { data } = await client.request<TransactionsRefundGetResponse>({
    method: 'GET',
    url: transactionsRefundGetURL(),
    params: request.queryParams,
    ...request.axiosConfig
  });

  return data;
};

export const tRefundGetKeygen = (request?: TransactionsRefundGetRequest) => {
  return [transactionsRefundGetURL(), request].filter(Boolean) as QueryKey;
};

export const useTransactionsRefundGetQuery = (
  request: TransactionsRefundGetRequest,
  options?: Omit<
    UseQueryOptions<TransactionsRefundGetResponse>,
    'queryKey' | 'queryFn'
  >
) => {
  const query = useQuery({
    queryKey: tRefundGetKeygen(request),
    queryFn: () => transactionsRefundGetFn(request),
    ...options
  });

  return query;
};
