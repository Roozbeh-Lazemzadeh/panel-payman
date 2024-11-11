import { atom, useAtom } from 'jotai';

export type AuthState = {
  loginStatus: 'unset' | 'is-logged-in' | 'is-token-expired' | 'is-logged-out';
  accessToken?: string;
  refreshToken?: string;
};

export const authAtom = atom<AuthState>({
  // loginStatus: 'unset'
  loginStatus: 'is-logged-in'
});

export const useAuthAtom = () => {
  const [auth, setAuth] = useAtom(authAtom);
  return { auth, setAuth };
};
