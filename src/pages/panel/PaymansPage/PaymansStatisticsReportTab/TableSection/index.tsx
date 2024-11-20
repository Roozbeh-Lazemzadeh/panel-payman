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
    Bank: '',
    'Payman Start Date': '',
    'Total Paymans': '',
    'Creating Paymans': '',
    'Awaiting Confirmation Paymans': '',
    'Active Paymans': '',
    'Canceled Paymans': '',
    'Inactive Paymans': '',
    'Expired Paymans': '',
    Unknown: ''
  }).map((key) => ({
    value: key,
    label: key
  }));

  const columns: TableColumnsType = [
    {
      width: 150,
      title: 'Bank',
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
      title: 'Payman Start Date',
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
      title: 'Total Paymans',
      dataIndex: 'TotalCount',
      key: 'TotalCount',
      sorter: (a, b) => (a.TotalCount as number) - (b.TotalCount as number)
    },
    {
      width: 180,
      title: 'Creating Paymans',
      dataIndex: 'CreatingPaymans',
      key: 'CreatingPaymans',
      sorter: (a, b) =>
        (a.CreatingPaymans as number) - (b.CreatingPaymans as number)
    },
    {
      width: 210,
      title: 'Awaiting Confirmation Paymans',
      dataIndex: 'AwaitingConfirmPaymans',
      key: 'AwaitingConfirmPaymans',
      sorter: (a, b) =>
        (a.AwaitingConfirmPaymans as number) -
        (b.AwaitingConfirmPaymans as number)
    },
    {
      width: 150,
      title: 'Active Paymans',
      dataIndex: 'ActivePaymans',
      key: 'ActivePaymans',
      sorter: (a, b) =>
        (a.ActivePaymans as number) - (b.ActivePaymans as number)
    },
    {
      width: 150,
      title: 'Canceled Paymans',
      dataIndex: 'CanceledPaymans',
      key: 'CanceledPaymans',
      sorter: (a, b) =>
        (a.CanceledPaymans as number) - (b.CanceledPaymans as number)
    },
    {
      width: 150,
      title: 'Inactive Paymans',
      dataIndex: 'InactivePaymans',
      key: 'InactivePaymans',
      sorter: (a, b) =>
        (a.InactivePaymans as number) - (b.InactivePaymans as number)
    },
    {
      width: 180,
      title: 'Expired Paymans',
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
