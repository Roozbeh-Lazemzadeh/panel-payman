import { createBrowserRouter, RouterProviderProps } from 'react-router-dom';
import HomePage from './HomePage';
import AppLayout from 'layouts/AppLayout';
import PanelLayout from 'layouts/PanelLayout';
import routes from './routes';
import LoginPage from './auth/LoginPage';
import DashboardPage from './panel/DashboardPage';
import NotFoundPage from './NotFoundPage';
import PaymanPage from './panel/PaymansPage';
import FAQPage from './panel/FAQPage';
import TransactionsPage from './panel/TransactionsPage';
import ServicesPage from './panel/ServicesPage';
import SupportPage from './panel/SupportPage';

const router: RouterProviderProps['router'] = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: routes.public.home.path(),
        Component: HomePage
      },
      {
        path: routes.auth.login.path(),
        Component: LoginPage
      },
      {
        Component: PanelLayout,
        children: [
          {
            path: routes.panel.dashboard.path(),
            Component: DashboardPage
          }
        ]
      },
      {
        Component: PanelLayout,
        children: [
          {
            path: routes.panel.paymans.path(),
            Component: PaymanPage
          }
        ]
      },
      {
        Component: PanelLayout,
        children: [
          {
            path: routes.panel.transactions.path(),
            Component: TransactionsPage
          }
        ]
      },
      {
        Component: PanelLayout,
        children: [
          {
            path: routes.panel.services.path(),
            Component: ServicesPage
          }
        ]
      },
      {
        Component: PanelLayout,
        children: [
          {
            path: routes.panel.faq.path(),
            Component: FAQPage
          }
        ]
      },
      {
        Component: PanelLayout,
        children: [
          {
            path: routes.panel.support.path(),
            Component: SupportPage
          }
        ]
      }
    ]
  },
  {
    path: '*',
    Component: NotFoundPage
  }
]);

export default router;
