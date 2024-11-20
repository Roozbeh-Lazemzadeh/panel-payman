import { ReportsGetRequest, ReportsGetResponse } from './types';
import { client } from 'services/clients';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import delayed from 'utils/delayed';
import getMockData from './mock';

const isMock = true;

const reportsGetURL = (request?: ReportsGetRequest) => {
  return `/reports/${request?.pathParams.report_type ?? ''}`;
};

export const reportsGetFn = async (request: ReportsGetRequest) => {
  if (isMock) return delayed(getMockData(request.pathParams.report_type));

  const { data } = await client.request<ReportsGetResponse>({
    method: 'GET',
    url: reportsGetURL(request),
    params: request.queryParams,
    ...request.axiosConfig
  });

  return data;
};

export const reportsGetKeygen = (request?: ReportsGetRequest) => {
  return [
    reportsGetURL(request),
    request?.pathParams.report_type,
    request?.queryParams?.range
  ].filter(Boolean) as QueryKey;
};

export const useReportsGetQuery = (
  request: ReportsGetRequest,
  options?: Omit<UseQueryOptions<ReportsGetResponse>, 'queryKey' | 'queryFn'>
) => {
  const query = useQuery({
    queryKey: reportsGetKeygen(request),
    queryFn: () => reportsGetFn(request),
    ...options
  });

  return query;
};
