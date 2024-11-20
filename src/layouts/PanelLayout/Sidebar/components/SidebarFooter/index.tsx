import React from 'react';
import CustomTooltip from 'components/Helpers/CustomToolTip';
import styles from './styles.module.scss';
import { useAuthAtom } from 'store/auth-atoms';

type SidebarFooterProps = {
  sidebarOpen: boolean;
};

const SidebarFooter: React.FC<SidebarFooterProps> = ({ sidebarOpen }) => {
  const { auth, setAuth } = useAuthAtom();

  const logoOutClickHandler = () => {
    if (auth.loginStatus === 'is-logged-in')
      setAuth({
        loginStatus: 'unset'
      });
  };

  return (
    <CustomTooltip
      sidebarOpen={sidebarOpen}
      align={{ offset: [8, 0] }}
      title='logout'
    >
      <div className={styles.logout} onClick={logoOutClickHandler}>
        <img src='/assets/pics/Logout.svg' alt='logout' />
        <span
          className={`${styles['exit-text']} ${!sidebarOpen ? styles.hidden : ''}`}
        >
          logout
        </span>
      </div>
    </CustomTooltip>
  );
};

export default SidebarFooter;
