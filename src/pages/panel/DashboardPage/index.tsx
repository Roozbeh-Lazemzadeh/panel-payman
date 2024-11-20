import { FC } from 'react';
import DashboardCards from './DashboardCards';
import styles from './styles.module.scss';
import AppBanner from 'components/AppBanner';

const DashboardPage: FC = () => {
  return (
    <div className={styles['dashboard-wrapper']}>
      <AppBanner
        title='Payment, This Time Enjoyable'
        description='Here, you can manage and review all the services offered by your direct payment service, monitor each transaction in detail, and view the necessary insights and evaluations for your service.'
      />

      {/* DashboardCards for Transactions */}
      <DashboardCards titleComponent='Transaction' reportType='transactions' />

      <div className={styles['dashboard-divider']}></div>

      {/* DashboardCards for Paymans */}
      <DashboardCards titleComponent='Mandates' reportType='paymans' />
    </div>
  );
};

export default DashboardPage;
