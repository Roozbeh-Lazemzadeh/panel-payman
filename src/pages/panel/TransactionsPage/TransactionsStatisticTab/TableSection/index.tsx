import moment from 'jalali-moment';
import { TableColumnsType } from 'antd';
import CustomTable from 'components/AppTable';
import { FC } from 'react';
import { useTransactionsStatisticGetQuery } from 'services/rest/transactions/statistic';
import { useTStatisticFiltersAtom } from '../atoms';
import { useSelectedColumns } from '../../../../../components/Helpers/columnFilters';

const TableSection: FC = () => {
  const [selectedColumns] = useSelectedColumns('t-statistic');
  const [tStatisticFilters] = useTStatisticFiltersAtom();
  const { data } = useTransactionsStatisticGetQuery({
    queryParams: { ...tStatisticFilters }
  });

  const columnFilters = Object.keys({
    Bank: '',
    'Transaction Starting Date': '',
    'Transaction Ending Date': '',
    'Total Transactions': '',
    'Total Count': '',
    'Succeeded Count': '',
    'Failed Count': '',
    'Insufficient Balance': '',
    'Other Reasons': '',
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
      width: 200,
      title: 'Transaction Starting Date',
      dataIndex: 'TransactionStartingDate',
      key: 'TransactionStartingDate',
      sorter: (a, b) => {
        const dateA = moment(a.TransactionStartingDate, 'jYYYY/jMM/jDD');
        const dateB = moment(b.TransactionStartingDate, 'jYYYY/jMM/jDD');
        return dateA.valueOf() - dateB.valueOf();
      }
    },
    {
      width: 200,
      title: 'Transaction Ending Date',
      dataIndex: 'TransactionEndingDate',
      key: 'TransactionEndingDate',
      sorter: (a, b) => {
        const dateA = moment(a.TransactionEndingDate, 'jYYYY/jMM/jDD');
        const dateB = moment(b.TransactionEndingDate, 'jYYYY/jMM/jDD');
        return dateA.valueOf() - dateB.valueOf();
      }
    },
    {
      width: 150,
      title: 'Total Transactions',
      dataIndex: 'TotalAmount',
      key: 'TotalAmount',
      sorter: (a, b) => (a.TotalAmount as number) - (b.TotalAmount as number)
    },
    {
      width: 150,
      title: 'Total Count',
      dataIndex: 'TotalCount',
      key: 'TotalCount',
      sorter: (a, b) => (a.TotalCount as number) - (b.TotalCount as number)
    },
    {
      width: 150,
      title: 'Succeeded Count',
      dataIndex: 'SucceededTransactionsCount',
      key: 'SucceededTransactionsCount',
      sorter: (a, b) =>
        (a.SucceededTransactionsCount as number) -
        (b.SucceededTransactionsCount as number)
    },
    {
      width: 150,
      title: 'Failed Count',
      dataIndex: 'FailedTransactionsCount',
      key: 'FailedTransactionsCount',
      sorter: (a, b) =>
        (a.FailedTransactionsCount as number) -
        (b.FailedTransactionsCount as number)
    },
    {
      width: 150,
      title: 'Insufficient Balance',
      dataIndex: 'BalanceFailedTransactionsCount',
      key: 'BalanceFailedTransactionsCount',
      sorter: (a, b) =>
        (a.BalanceFailedTransactionsCount as number) -
        (b.BalanceFailedTransactionsCount as number)
    },
    {
      width: 150,
      title: 'Other Reasons',
      dataIndex: 'OtherFailedTransactionsCount',
      key: 'OtherFailedTransactionsCount',
      sorter: (a, b) =>
        (a.OtherFailedTransactionsCount as number) -
        (b.OtherFailedTransactionsCount as number)
    },
    {
      width: 150,
      title: 'Unknown',
      dataIndex: 'UnknownTransactionsCount',
      key: 'UnknownTransactionsCount',
      sorter: (a, b) =>
        (a.UnknownTransactionsCount as number) -
        (b.UnknownTransactionsCount as number)
    }
  ];

  // Filter the columns based on the selected columns
  const filteredColumns = columns.filter((column) => {
    return selectedColumns.includes(column.title as string);
  });

  return (
    <CustomTable
      tableKey='statistic'
      data={data?.result ?? []}
      columns={filteredColumns}
      columnFilters={columnFilters}
    />
  );
};

export default TableSection;
