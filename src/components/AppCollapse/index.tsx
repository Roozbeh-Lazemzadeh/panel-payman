import { FC } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import ArrowLeft3 from 'assets/Icons/ArrowLeft3';
import styles from './styles.module.scss'; // Import the SCSS module

type CollapseItem = {
  label: string;
  text: string;
  key: string;
};

type CustomCollapseProps = {
  list: CollapseItem[];
};

const AppCollapse: FC<CustomCollapseProps> = ({ list }) => {
  const items: CollapseProps['items'] = list.map((item) => ({
    key: item.key,
    label: item.label,
    children: <span>{item.text}</span>
  }));

  return (
    <Collapse
      ghost
      accordion
      className={styles['ant-collapse']} // Apply the SCSS styles
      style={{ background: '#fff' }}
      items={items}
      expandIcon={({ isActive }) => (
        <ArrowLeft3
          style={{ transform: isActive ? 'rotate(-90deg)' : 'rotate(0)' }}
        />
      )}
    />
  );
};

export default AppCollapse;
