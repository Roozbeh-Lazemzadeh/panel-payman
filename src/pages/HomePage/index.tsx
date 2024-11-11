import routes from 'pages/routes';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const HomePage: FC = () => {
  return <Navigate to={routes.panel.dashboard.path()} replace />;
};

export default HomePage;
