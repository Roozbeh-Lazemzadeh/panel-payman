import AppBanner from 'components/AppBanner';
import styles from './styles.module.scss';
import { FC } from 'react';

const SupportPage: FC = () => {
  return (
    <>
      <AppBanner
        title='پشتیبانی فنی سیستم'
        description='در اینجا شما میتوانید راه های ارتباطی مورد نیاز برای سوال و یا مشکلات پیش آمده در پنل یا دسترسی خود با کارشناسان ما درمیان بگذارید.'
      />
      <div className={styles['support-wrapper']}>
        <h1 className={styles['support-wrapper__title']}>شماره های تماس </h1>
        <div className={styles['support-wrapper__item']}>
          <div className={styles['support-wrapper__item-title']}>
            پشتیبانی پنل
          </div>
          <div className={styles['support-wrapper__item-value']}>
            02191691499 | 02191691499
          </div>
        </div>
        <div className={styles['support-wrapper__item']}>
          <div className={styles['support-wrapper__item-title']}>
            پشتیبانی فنی
          </div>
          <div className={styles['support-wrapper__item-value']}>
            02191691499
          </div>
        </div>
        <div className={styles['support-wrapper__item']}>
          <div className={styles['support-wrapper__item-title']}>
            توسعه کسب و کار و قرارداد
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
