import { FC } from 'react';
import CustomTabs from 'layouts/PanelLayout/CustomTabs/index.tsx';
import TransactionsReportTab from './TransactionsTab';
import TransactionsStatisticTab from './TransactionsStatisticTab';
import TransactionsRefundTab from './TransactionsRefundTab';

const TransactionsPage: FC = () => {
  const tabItems = [
    {
      key: '1',
      label: 'Transaction Reports',
      children: <TransactionsReportTab key='report' />
    },
    {
      key: '2',
      label: 'Transaction Statistics Report',
      children: <TransactionsStatisticTab key='statistic' />
    },
    {
      key: '3',
      label: 'Refund Transaction Reports',
      children: <TransactionsRefundTab key='refund' />
    }
  ];
  return <CustomTabs items={tabItems} />;
};

export default TransactionsPage;
