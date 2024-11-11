import { FC } from 'react';
import CustomTabs from 'layouts/PanelLayout/CustomTabs';
import ServicesReportTab from './ServicesTab';
import ServicesStatisticTab from './ServicesStatisticTab';

const ServicesPage: FC = () => {
  const tabItems = [
    {
      key: '1',
      label: 'گزارش فراخوانی سرویس‌ها',
      children: <ServicesReportTab />
    },
    {
      key: '2',
      label: 'گزارش آماری فراخوانی سرویس‌ها',
      children: <ServicesStatisticTab />
    }
  ];
  return <CustomTabs items={tabItems} />;
};

export default ServicesPage;
