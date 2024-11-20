import { FC } from 'react';
import CustomTabs from 'layouts/PanelLayout/CustomTabs';
import ServicesReportTab from './ServicesTab';
import ServicesStatisticTab from './ServicesStatisticTab';

const ServicesPage: FC = () => {
  const tabItems = [
    {
      key: '1',
      label: 'Service Invocation Report',
      children: <ServicesReportTab />
    },
    {
      key: '2',
      label: 'Statistical Report of Service Invocations',
      children: <ServicesStatisticTab />
    }
  ];
  return <CustomTabs items={tabItems} />;
};

export default ServicesPage;
