import { FC } from 'react';
import styles from './styles.module.scss';

type SidebarHeaderProps = {
  sidebarOpen: boolean;
  handleSidebarOpen: () => void;
};

const SidebarHeader: FC<SidebarHeaderProps> = ({
  sidebarOpen,
  handleSidebarOpen
}) => {
  return (
    <div
      className={`${styles['sidebar-header']} ${sidebarOpen ? styles.stretch : ''}`}
    >
      {sidebarOpen ? (
        <img src='/assets/images/Logo-mark.svg' alt='Logo' />
      ) : (
        <img src='/assets/images/Logo-mark2.svg' alt='Logo' />
      )}
      {sidebarOpen ? (
        <img
          src='/assets/images/Menu-icon.svg'
          alt='arrow'
          onClick={handleSidebarOpen}
          className={styles['sidebar-arrow']}
        />
      ) : (
        <img
          src='/assets/images/Menu-icon2.svg'
          alt='arrow'
          onClick={handleSidebarOpen}
          className={styles['sidebar-arrow']}
        />
      )}
    </div>
  );
};

export default SidebarHeader;
