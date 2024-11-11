import { FC } from 'react';
import CustomTabs from 'layouts/PanelLayout/CustomTabs/index.tsx';
import TransactionsReportTab from './TransactionsTab';
import TransactionsStatisticTab from './TransactionsStatisticTab';
import TransactionsRefundTab from './TransactionsRefundTab';

const TransactionsPage: FC = () => {
  const tabItems = [
    {
      key: '1',
      label: 'گزارش تراکنش ها',
      children: <TransactionsReportTab key='report' />
    },
    {
      key: '2',
      label: 'گزارش آماری تراکنش ها',
      children: <TransactionsStatisticTab key='statistic' />
    },
    {
      key: '3',
      label: 'گزارش تراکنش های بازپرداخت',
      children: <TransactionsRefundTab key='refund' />
    }
  ];
  return <CustomTabs items={tabItems} />;
};

export default TransactionsPage;
