import { client } from 'services/clients';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import mock from './mock';
import delayed from 'utils/delayed';
import { APICallsReportGetRequest, APICallsReportGetResponse } from './types';

const isMock = true;

const APICallsReportGetURL = () => {
  return `/services/reports`;
};

export const APICallsReportGetFn = async (
  request: APICallsReportGetRequest
) => {
  if (isMock) return delayed(mock, 1000);

  const { data } = await client.request<APICallsReportGetResponse>({
    method: 'GET',
    url: APICallsReportGetURL(),
    params: request.queryParams,
    ...request.axiosConfig
  });

  return data;
};

export const APICallsGetKeygen = (request?: APICallsReportGetRequest) => {
  return [APICallsReportGetURL(), request].filter(Boolean) as QueryKey;
};

export const useAPICallsReportGetQuery = (
  request: APICallsReportGetRequest,
  options?: Omit<
    UseQueryOptions<APICallsReportGetResponse>,
    'queryKey' | 'queryFn'
  >
) => {
  const query = useQuery({
    queryKey: APICallsGetKeygen(request),
    queryFn: () => APICallsReportGetFn(request),
    ...options
  });

  return query;
};
