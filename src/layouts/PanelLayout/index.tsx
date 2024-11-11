import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Flex } from 'antd';
import Header from './Header';
import styles from './styles.module.scss';

const PanelLayout: FC = () => {
  return (
    <Flex vertical={false} className={styles.panelLayout}>
      <Sidebar />

      <Flex vertical={true} className={styles.panelLayout__main}>
        <Header />
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default PanelLayout;
