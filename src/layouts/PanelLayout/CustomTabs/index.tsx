import { FC } from 'react';
import { Tabs } from 'antd';
import styles from './styles.module.scss';
import { useSearchParams } from 'react-router-dom';

type TabItem = {
  key: string;
  label: string;
  children: React.ReactNode;
};

type CustomTabsProps = {
  items: TabItem[];
};

const CustomTabs: FC<CustomTabsProps> = ({ items }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabKey = searchParams.get('tab') || '1';

  const handleTabChange = (key: string) => {
    setSearchParams({ tab: key });
  };
  return (
    <div className={styles['customTab']}>
      <Tabs
        items={items}
        activeKey={activeTabKey}
        onChange={handleTabChange}
        destroyInactiveTabPane={true}
      />
    </div>
  );
};

export default CustomTabs;
