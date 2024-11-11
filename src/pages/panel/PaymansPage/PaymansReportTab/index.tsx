import { FC } from 'react';
import FilterSection from './FilterSection';
import TableSection from './TableSection';
import { Flex } from 'antd';
import styles from './styles.module.scss';

const PaymansReportTab: FC = () => {
  return (
    <Flex vertical className={styles['transaction-report']}>
      <FilterSection />
      <TableSection />
    </Flex>
  );
};

export default PaymansReportTab;
