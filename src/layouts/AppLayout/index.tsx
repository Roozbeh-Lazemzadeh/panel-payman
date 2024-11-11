import { FC, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthAtom } from 'store/auth-atoms';
import { getAuthCookie, refreshToken } from 'utils/auth-utils';
import LoadingPage from './LoadingPage';

const AppLayout: FC = () => {
  const { auth, setAuth } = useAuthAtom();
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = location.pathname.includes('/auth');
  const isPanelPage = location.pathname.includes('/panel');
  const isPublicPage = !isAuthPage && !isPanelPage;

  useEffect(() => {
    if (auth.loginStatus !== 'unset') return;

    const { accessToken, refreshToken } = getAuthCookie();

    const loginStatus = (
      accessToken && refreshToken
        ? 'is-logged-in'
        : !accessToken && refreshToken
          ? 'is-token-expired'
          : 'is-logged-out'
    ) as typeof auth.loginStatus;

    if (auth.loginStatus !== loginStatus)
      setAuth({ loginStatus, accessToken, refreshToken });
  }, [setAuth, auth]);

  useEffect(() => {
    if (
      isPublicPage ||
      auth.loginStatus === 'unset' ||
      (isAuthPage && auth.loginStatus === 'is-logged-out') ||
      (isPanelPage && auth.loginStatus === 'is-logged-in')
    )
      return;

    if (auth.loginStatus === 'is-token-expired') return void refreshToken();

    if (isAuthPage && auth.loginStatus === 'is-logged-in')
      return void navigate('/panel/dashboard');

    if (isPanelPage && auth.loginStatus === 'is-logged-out')
      return void navigate('/auth/login');
  }, [isPublicPage, isAuthPage, isPanelPage, auth.loginStatus, navigate]);

  return (
    <>
      <LoadingPage isLoading={auth.loginStatus === 'unset'} />
      <Outlet />
    </>
  );
};

export default AppLayout;
