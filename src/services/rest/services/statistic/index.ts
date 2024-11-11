import { client } from 'services/clients';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import delayed from 'utils/delayed';
import {
  APICallsStatisticGetRequest,
  APICallsStatisticGetResponse
} from './types';
import mock from './mock';

const isMock = true;

const APICallsStatisticGetURL = () => {
  return `/services/statistics`;
};

export const APICallsStatisticGetFn = async (
  request: APICallsStatisticGetRequest
) => {
  if (isMock) return delayed(mock, 1000);

  const { data } = await client.request<APICallsStatisticGetResponse>({
    method: 'GET',
    url: APICallsStatisticGetURL(),
    params: request.queryParams,
    ...request.axiosConfig
  });

  return data;
};

export const APICallsStatisticGetKeygen = (
  request?: APICallsStatisticGetRequest
) => {
  return [APICallsStatisticGetURL(), request].filter(Boolean) as QueryKey;
};

export const useAPICallsStatisticGetQuery = (
  request: APICallsStatisticGetRequest,
  options?: Omit<
    UseQueryOptions<APICallsStatisticGetResponse>,
    'queryKey' | 'queryFn'
  >
) => {
  const query = useQuery({
    queryKey: APICallsStatisticGetKeygen(request),
    queryFn: () => APICallsStatisticGetFn(request),
    ...options
  });

  return query;
};
