import { FC, PropsWithChildren } from 'react';
import LoginFooter from '../../components/AppComponent/LoginFooter';
import styles from './styles.module.scss';

type Props = PropsWithChildren<{ name: string }>;

const LoginLayout: FC<Props> = ({ children, name }) => {
  return (
    <>
      <img
        className={`${styles['login-layout_img']}`}
        src='/assets/images/Logo-mark.svg'
        alt=''
      />
      {children}
      {name}
      <LoginFooter />
    </>
  );
};

export default LoginLayout;
