import router from 'pages/router';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

const AppRouterProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
