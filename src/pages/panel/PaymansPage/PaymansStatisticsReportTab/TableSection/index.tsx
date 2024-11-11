import moment from 'jalali-moment';
import { TableColumnsType } from 'antd';
import CustomTable from 'components/AppTable';
import { FC } from 'react';
import { usePStatisticFiltersAtom } from '../atoms';
import { useSelectedColumns } from 'components/Helpers/columnFilters';
import { usePaymansStatisticGetQuery } from 'services/rest/paymans/statistic';

const TableSection: FC = () => {
  const [selectedColumns] = useSelectedColumns('p-statistic');
  const [pStatisticFilters] = usePStatisticFiltersAtom();
  const { data } = usePaymansStatisticGetQuery({
    queryParams: { ...pStatisticFilters }
  });

  const columnFilters = Object.keys({
    بانک: '',
    'تاریخ شروع پیمان': '',
    'کل پیمان': '',
    'پیمان‌های درحال ایجاد': '',
    'پیمان‌های در انتظار تایید': '',
    'پیمان‌های فعال': '',
    'پیمان‌های لغو شده': '',
    'پیمان‌های غیر فعال': '',
    'پیمان‌های منقضی شده': '',
    نامشخص: ''
  }).map((key) => ({
    value: key,
    label: key
  }));

  const columns: TableColumnsType = [
    {
      width: 150,
      title: 'بانک',
      dataIndex: 'SourceBankName',
      key: 'SourceBankName',
      sorter: (a, b) => {
        return (a.SourceBankName as string).localeCompare(
          b.SourceBankName as string,
          'fa'
        );
      }
    },
    {
      width: 150,
      title: 'تاریخ شروع پیمان',
      dataIndex: 'PaymanStartDate',
      key: 'PaymanStartDate',
      sorter: (a, b) => {
        const dateA = moment(a.PaymanStartDate, 'jYYYY/jMM/jDD');
        const dateB = moment(b.PaymanStartDate, 'jYYYY/jMM/jDD');
        return dateA.valueOf() - dateB.valueOf();
      }
    },
    {
      width: 150,
      title: 'کل پیمان',
      dataIndex: 'TotalCount',
      key: 'TotalCount',
      sorter: (a, b) => (a.TotalCount as number) - (b.TotalCount as number)
    },
    {
      width: 180,
      title: 'پیمان‌های درحال ایجاد',
      dataIndex: 'CreatingPaymans',
      key: 'CreatingPaymans',
      sorter: (a, b) =>
        (a.CreatingPaymans as number) - (b.CreatingPaymans as number)
    },
    {
      width: 180,
      title: 'پیمان‌های در انتظار تایید',
      dataIndex: 'AwaitingConfirmPaymans',
      key: 'AwaitingConfirmPaymans',
      sorter: (a, b) =>
        (a.AwaitingConfirmPaymans as number) -
        (b.AwaitingConfirmPaymans as number)
    },
    {
      width: 150,
      title: 'پیمان‌های فعال',
      dataIndex: 'ActivePaymans',
      key: 'ActivePaymans',
      sorter: (a, b) =>
        (a.ActivePaymans as number) - (b.ActivePaymans as number)
    },
    {
      width: 150,
      title: 'پیمان‌های لغو شده',
      dataIndex: 'CanceledPaymans',
      key: 'CanceledPaymans',
      sorter: (a, b) =>
        (a.CanceledPaymans as number) - (b.CanceledPaymans as number)
    },
    {
      width: 150,
      title: 'پیمان‌های غیر فعال',
      dataIndex: 'InactivePaymans',
      key: 'InactivePaymans',
      sorter: (a, b) =>
        (a.InactivePaymans as number) - (b.InactivePaymans as number)
    },
    {
      width: 180,
      title: 'پیمان‌های منقضی شده',
      dataIndex: 'ExpiredPaymans',
      key: 'ExpiredPaymans',
      sorter: (a, b) =>
        (a.ExpiredPaymans as number) - (b.ExpiredPaymans as number)
    }
  ];

  // Filter the columns based on the selected columns
  const filteredColumns = columns.filter((column) => {
    return selectedColumns.includes(column.title as string);
  });

  return (
    <CustomTable
      tableKey='statisticPaymans'
      data={data?.result ?? []}
      columns={filteredColumns}
      columnFilters={columnFilters}
    />
  );
};

export default TableSection;
