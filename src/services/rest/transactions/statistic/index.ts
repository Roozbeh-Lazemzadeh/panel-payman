import { client } from 'services/clients';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import mock from './mock';
import delayed from 'utils/delayed';
import {
  TransactionsStatisticGetRequest,
  TransactionsStatisticGetResponse
} from './types';

const isMock = true;

const transactionsStatisticGetURL = () => {
  return `/transactions/reports/statistics`;
};

export const transactionsStatisticGetFn = async (
  request: TransactionsStatisticGetRequest
) => {
  if (isMock) return delayed(mock, 1000);

  const { data } = await client.request<TransactionsStatisticGetResponse>({
    method: 'GET',
    url: transactionsStatisticGetURL(),
    params: request.queryParams,
    ...request.axiosConfig
  });

  return data;
};

export const tStatisticGetKeygen = (
  request?: TransactionsStatisticGetRequest
) => {
  return [transactionsStatisticGetURL(), request].filter(Boolean) as QueryKey;
};

export const useTransactionsStatisticGetQuery = (
  request: TransactionsStatisticGetRequest,
  options?: Omit<
    UseQueryOptions<TransactionsStatisticGetResponse>,
    'queryKey' | 'queryFn'
  >
) => {
  const query = useQuery({
    queryKey: tStatisticGetKeygen(request),
    queryFn: () => transactionsStatisticGetFn(request),
    ...options
  });

  return query;
};
