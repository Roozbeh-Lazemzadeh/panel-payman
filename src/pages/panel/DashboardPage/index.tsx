import { FC } from 'react';
import DashboardCards from './DashboardCards';
import styles from './styles.module.scss';
import AppBanner from 'components/AppBanner';

const DashboardPage: FC = () => {
  return (
    <div className={styles['dashboard-wrapper']}>
      <AppBanner
        title='پرداخت٬ این بار لذت بخش'
        description='شما در اینجا میتوانید تمامی خدماتی که سرویس پرداخت مستقیم شما دارا میباشد را کنترول و برسی کرده و هر تراکنش را به شکل کامل رصد کرده و برسی های لازم رو برای سرویس خود مشاهده کنید.'
      />

      {/* DashboardCards for Transactions */}
      <DashboardCards
        titleComponent='آمار تراکنش‌ها'
        reportType='transactions'
      />

      <div className={styles['dashboard-divider']}></div>

      {/* DashboardCards for Paymans */}
      <DashboardCards titleComponent='آمار پیمان‌ها' reportType='paymans' />
    </div>
  );
};

export default DashboardPage;
