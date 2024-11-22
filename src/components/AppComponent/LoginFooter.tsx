import styles from './styles.module.scss';

interface LoginFooterProps {
  topSpace?: string;
}

const LoginFooter: React.FC<LoginFooterProps> = () => {
  return (
    <div className={`${styles['footer-wrapper']}`}>
      <img
        className={`${styles['footer-wrapper_img']}`}
        src='/assets/images/logo-footer.svg'
        alt='Payman Logo'
      />
      Developed by Payman
    </div>
  );
};

export default LoginFooter;
