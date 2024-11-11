// POST
// phone_number
// /auth/login

import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { client } from 'services/clients';
import { AuthLoginPostRequest, AuthLoginPostResponse } from './types';

const authLoginPostURL = () => {
  return `/api/account`;
};

export const authLoginPostFn = async (request: AuthLoginPostRequest) => {
  const { data } = await client.request<AuthLoginPostResponse>({
    method: 'POST',
    url: authLoginPostURL(),
    data: request.data,
    ...request.axiosConfig
  });

  return data;
};

export const useAuthLoginPostMutation = (
  options?: UseMutationOptions<
    AuthLoginPostResponse,
    unknown,
    AuthLoginPostRequest
  >
) => {
  return useMutation({ mutationFn: authLoginPostFn, ...options });
};
