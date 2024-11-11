import styles from './styles.module.scss';

interface LoginFooterProps {
  topSpace?: string;
}

const LoginFooter: React.FC<LoginFooterProps> = () => {
  return (
    <div className={`${styles['footer-wrapper']}`}>
      <img
        className={`${styles['footer-wrapper_img']}`}
        src='/assets/images/login/logo-footer.svg'
        alt='Payman Logo'
      />
      توسعه‌یافته توسط پیمان
    </div>
  );
};

export default LoginFooter;
