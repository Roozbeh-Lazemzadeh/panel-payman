import { FC } from 'react';
import styles from './styles.module.scss';

type AppBannerProps = {
  title: string;
  description: string;
};

const AppBanner: FC<AppBannerProps> = ({ title, description }) => {
  return (
    <>
      <div className={styles['dashboard-banner']}>
        <div className={styles['dashboard-banner__content']}>
          <span className={styles['dashboard-banner__content-title']}>
            {title}
          </span>
          <span className={styles['dashboard-banner__content-description']}>
            {description}
          </span>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
