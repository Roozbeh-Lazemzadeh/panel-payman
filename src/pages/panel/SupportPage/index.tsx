import AppBanner from 'components/AppBanner';
import styles from './styles.module.scss';
import { FC } from 'react';

const SupportPage: FC = () => {
  return (
    <>
      <AppBanner
        title='Technical System Support'
        description='Here you can find the contact methods needed to ask questions or share any issues you encounter with the panel or your access with our experts.'
      />
      <div className={styles['support-wrapper']}>
        <h1 className={styles['support-wrapper__title']}>Contact Numbers</h1>
        <div className={styles['support-wrapper__item']}>
          <div className={styles['support-wrapper__item-title']}>
            Panel Support
          </div>
          <div className={styles['support-wrapper__item-value']}>
            02191691499 | 02191691499
          </div>
        </div>
        <div className={styles['support-wrapper__item']}>
          <div className={styles['support-wrapper__item-title']}>
            Technical Support
          </div>
          <div className={styles['support-wrapper__item-value']}>
            02191691499
          </div>
        </div>
        <div className={styles['support-wrapper__item']}>
          <div className={styles['support-wrapper__item-title']}>
            Business Development and Contracts
          </div>
          <div className={styles['support-wrapper__item-value']}>
            02191691499
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
