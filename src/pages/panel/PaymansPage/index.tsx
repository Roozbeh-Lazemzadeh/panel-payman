import CustomTabs from 'layouts/PanelLayout/CustomTabs';
import { FC } from 'react';
import PaymansReportTab from './PaymansReportTab';
import PaymansStatisticsReportTab from './PaymansStatisticsReportTab';

const tabItems = [
  {
    key: '1',
    label: 'گزارش پیمان‌ها',
    children: <PaymansReportTab />
  },
  {
    key: '2',
    label: 'گزارش آماری پیمان‌ها',
    children: <PaymansStatisticsReportTab />
  }
];
export const PaymanPage: FC = () => {
  return <CustomTabs items={tabItems} />;
};

export default PaymanPage;
