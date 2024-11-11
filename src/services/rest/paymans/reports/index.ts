import { PaymansReportGetRequest, PaymansReportGetResponse } from './types';
import { client } from 'services/clients';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import mock from './mock';
import delayed from 'utils/delayed';

const isMock = true;

const paymansReportGetURL = () => {
  return `/paymans/reports`;
};

export const paymansReportGetFn = async (request: PaymansReportGetRequest) => {
  if (isMock) return delayed(mock, 0);

  const { data } = await client.request<PaymansReportGetResponse>({
    method: 'GET',
    url: paymansReportGetURL(),
    params: request.queryParams,
    ...request.axiosConfig
  });

  return data;
};

export const reportsGetKeygen = (request?: PaymansReportGetRequest) => {
  return [paymansReportGetURL(), request].filter(Boolean) as QueryKey;
};

export const usePaymansReportGetQuery = (
  request: PaymansReportGetRequest,
  options?: Omit<
    UseQueryOptions<PaymansReportGetResponse>,
    'queryKey' | 'queryFn'
  >
) => {
  const query = useQuery({
    queryKey: reportsGetKeygen(request),
    queryFn: () => paymansReportGetFn(request),
    ...options
  });

  return query;
};
