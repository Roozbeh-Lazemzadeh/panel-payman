// POST
// phone_number, otp_code
// /auth/otp

import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { client } from 'services/clients';
import { AuthOtpPostRequest } from './types';

const authOtpPostURL = () => {
  return `/auth/otp`;
};

export const authOtpPostFn = async (request: AuthOtpPostRequest) => {
  const { data } = await client.request({
    method: 'POST',
    url: authOtpPostURL(),
    data: request.data,
    ...request.axiosConfig
  });

  return data;
};

export const useAuthOtpPostMutation = (
  options?: UseMutationOptions<unknown, unknown, AuthOtpPostRequest>
) => {
  return useMutation({ mutationFn: authOtpPostFn, ...options });
};
