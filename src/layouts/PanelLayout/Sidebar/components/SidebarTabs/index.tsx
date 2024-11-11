import React from 'react';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import styles from './styles.module.scss';

type SidebarItem = {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  handleClickSubMenus?: () => void;
};

type SidebarTabsProps = {
  selectedKey: string;
  handleTabChange: (key: string) => void;
  items: SidebarItem[];
};

const SidebarTabs: React.FC<SidebarTabsProps> = ({
  selectedKey,
  handleTabChange,
  items
}) => {
  return (
    <Tabs
      activeKey={selectedKey}
      onChange={handleTabChange}
      tabPosition='left'
      className={styles['custom-sidebar-tabs']}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.key}>
          <TabPane
            tab={
              <span className={styles['tab-item']}>
                {item.icon}
                {item.label}
              </span>
            }
            key={item.key}
          />
          {index === 1 && <div onClick={item.handleClickSubMenus} />}
        </React.Fragment>
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
