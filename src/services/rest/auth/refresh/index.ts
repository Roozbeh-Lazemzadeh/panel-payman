// POST
// phone_number
// /auth/refresh

import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { client } from 'services/clients';
import { AuthRefreshPostRequest } from './types';

const authRefreshPostURL = () => {
  return `/auth/refresh`;
};

export const authRefreshPostFn = async (request: AuthRefreshPostRequest) => {
  const { data } = await client.request({
    method: 'POST',
    url: authRefreshPostURL(),
    data: request.data,
    ...request.axiosConfig
  });

  return data;
};

export const useAuthRefreshPostMutation = (
  options?: UseMutationOptions<unknown, unknown, AuthRefreshPostRequest>
) => {
  return useMutation({ mutationFn: authRefreshPostFn, ...options });
};
