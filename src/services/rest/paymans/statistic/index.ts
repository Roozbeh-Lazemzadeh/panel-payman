import { client } from 'services/clients';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import mock from './mock';
import delayed from 'utils/delayed';
import {
  PaymansStatisticGetRequest,
  PaymansStatisticGetResponse
} from './types';

const isMock = true;

const paymansStatisticGetURL = () => {
  return `/paymans/reports/statistics`;
};

export const paymansStatisticGetFn = async (
  request: PaymansStatisticGetRequest
) => {
  if (isMock) return delayed(mock, 1000);

  const { data } = await client.request<PaymansStatisticGetResponse>({
    method: 'GET',
    url: paymansStatisticGetURL(),
    params: request.queryParams,
    ...request.axiosConfig
  });

  return data;
};

export const pStatisticGetKeygen = (request?: PaymansStatisticGetRequest) => {
  return [paymansStatisticGetURL(), request].filter(Boolean) as QueryKey;
};

export const usePaymansStatisticGetQuery = (
  request: PaymansStatisticGetRequest,
  options?: Omit<
    UseQueryOptions<PaymansStatisticGetResponse>,
    'queryKey' | 'queryFn'
  >
) => {
  const query = useQuery({
    queryKey: pStatisticGetKeygen(request),
    queryFn: () => paymansStatisticGetFn(request),
    ...options
  });

  return query;
};
