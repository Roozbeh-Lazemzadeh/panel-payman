// POST
// phone_number
// /auth/Logout

import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { client } from 'services/clients';
import { AuthLogoutPostRequest, AuthLogoutPostResponse } from './types';

const authLogoutPostURL = () => {
  return `/auth/logout`;
};

export const authLogoutPostFn = async (request: AuthLogoutPostRequest) => {
  const { data } = await client.request<AuthLogoutPostResponse>({
    method: 'POST',
    url: authLogoutPostURL(),
    ...request.axiosConfig
  });

  return data;
};

export const useAuthLogoutPostMutation = (
  options?: UseMutationOptions<
    AuthLogoutPostResponse,
    unknown,
    AuthLogoutPostRequest
  >
) => {
  return useMutation({ mutationFn: authLogoutPostFn, ...options });
};
