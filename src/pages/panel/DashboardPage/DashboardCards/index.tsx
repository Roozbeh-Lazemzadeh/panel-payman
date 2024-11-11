import { FC, PropsWithChildren, useState } from 'react';
import { Select } from 'antd';
import ArrowDown from 'assets/Icons/ArrowDown';
import Card from './Card/Card';
import styles from './styles.module.scss';
import { useReportsGetQuery } from 'services/rest/dashboard';
import { ReportsGetRequest } from 'services/rest/dashboard/types';

type DashboardCardsProps = PropsWithChildren<{
  titleComponent: string;
  reportType: ReportsGetRequest['pathParams']['report_type'];
}>;

const DashboardCards: FC<DashboardCardsProps> = ({
  titleComponent,
  reportType
}) => {
  const [range, setRange] =
    useState<ReportsGetRequest['queryParams']['range']>('daily');

  const { data } = useReportsGetQuery({
    pathParams: { report_type: reportType },
    queryParams: { range }
  });

  return (
    <div className={styles['dashboard-report']}>
      <div className={styles['dashboard-report__header']}>
        <span className={styles['dashboard-report__header-title']}>
          {titleComponent}
        </span>
        <Select
          value={range}
          className={styles['dashboard-report__header-selected']}
          onChange={setRange}
          suffixIcon={<ArrowDown />}
          options={[
            { value: 'daily', label: 'روزانه' },
            { value: 'weekly', label: '7 روز گذشته' },
            { value: 'monthly', label: '۳۰ روز گذشته' }
          ]}
        />
      </div>
      <div className={styles['dashboard-report__carts']}>
        <Card dataMock={data?.result} />
      </div>
    </div>
  );
};

export default DashboardCards;