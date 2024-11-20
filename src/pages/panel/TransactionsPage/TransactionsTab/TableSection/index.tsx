import moment from 'jalali-moment';
import AppButton from 'components/AppButton';
import { Space, TableColumnsType } from 'antd';
import CustomTable from 'components/AppTable';
import CustomTag from 'components/AppTags';
import { FC } from 'react';
import { useTransactionsReportGetQuery } from 'services/rest/transactions/reports';
import { useTReportFiltersAtom } from '../atoms';
import { useSelectedColumns } from '../../../../../components/Helpers/columnFilters';
import styles from './styles.module.scss';

const TableSection: FC = () => {
  const [selectedColumns] = useSelectedColumns('t-report');
  const [tReportFilters] = useTReportFiltersAtom();
  const { data } = useTransactionsReportGetQuery({
    queryParams: { ...tReportFilters }
  });

  const columnFilters = Object.keys({
    'User Name': '',
    'National ID': '',
    'Mobile Number': '',
    Bank: '',
    'Transaction Status': '',
    'Contract ID': '',
    'Reference ID': '',
    'Transaction Amount': 0,
    'Payment Tracking ID': '',
    'Transaction Time': '',
    'Transaction Date': ''
  }).map((key) => ({
    value: key,
    label: key
  }));

  const columns: TableColumnsType = [
    {
      width: 150,
      title: 'User Name',
      dataIndex: 'Name',
      key: 'Name',
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: (a, b) => {
        return (a.Name as string).localeCompare(b.Name as string, 'fa');
      }
    },
    {
      width: 150,
      title: 'National ID',
      dataIndex: 'NationalCode',
      key: 'NationalCode'
    },
    {
      width: 150,
      title: 'Mobile Number',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber'
    },
    {
      width: 150,
      title: 'Bank',
      dataIndex: 'SourceBankName',
      key: 'SourceBankName',
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: (a, b) => {
        return (a.SourceBankName as string).localeCompare(
          b.SourceBankName as string,
          'fa'
        );
      }
    },
    {
      width: 190,
      title: 'Transaction Status',
      dataIndex: 'Status',
      key: 'Status',
      sortDirections: ['ascend', 'descend', 'ascend'],
      render: (_, record) => {
        const modifier =
          record.Status === 'Successful'
            ? 'green'
            : record.Status === 'Unsuccessful'
              ? 'red'
              : '';

        return <CustomTag modifier={modifier}>{record.Status}</CustomTag>;
      },
      sorter: (a, b) => {
        return (a.Status as string).localeCompare(b.Status as string, 'fa');
      }
    },
    {
      width: 150,
      title: 'Contract ID',
      dataIndex: 'Umr',
      key: 'Umr'
    },
    {
      width: 150,
      title: 'Reference ID',
      dataIndex: 'ReferenceId',
      key: 'ReferenceId'
    },
    {
      width: 200,
      title: 'Transaction Amount',
      dataIndex: 'TransactionAmount',
      key: 'TransactionAmount',
      sorter: (a, b) =>
        (a.TransactionAmount as number) - (b.TransactionAmount as number),
      sortDirections: ['ascend', 'descend', 'ascend']
    },
    {
      width: 200,
      title: 'Payment Tracking ID',
      dataIndex: 'TraceId',
      key: 'TraceId'
    },
    {
      width: 180,
      title: 'Transaction Time',
      dataIndex: 'TransactionTime',
      key: 'TransactionTime',
      sorter: (a, b) => {
        const timeA = moment(a.TransactionTime, 'HH:mm');
        const timeB = moment(b.TransactionTime, 'HH:mm');
        return timeA.valueOf() - timeB.valueOf();
      }
    },
    {
      width: 170,
      title: 'Transaction Date',
      dataIndex: 'TransactionDate',
      key: 'TransactionDate',
      sorter: (a, b) => {
        const dateA = moment(a.TransactionDate, 'jYYYY/jMM/jDD');
        const dateB = moment(b.TransactionDate, 'jYYYY/jMM/jDD');
        return dateA.valueOf() - dateB.valueOf();
      }
    }
  ];
  const actionsColumn = {
    width: 200,
    title: 'Actions',
    key: 'actions',
    fixed: 'right' as const,
    render: () => (
      <div className={styles['transaction-actionsColumn']}>
        <Space size='middle'>
          <AppButton modifier='secondary'>Details</AppButton>
          <AppButton modifier='default'>Inquiry</AppButton>
        </Space>
      </div>
    )
  };

  // Filter the columns based on the selected columns
  const filteredColumns = columns
    .filter((column) => {
      return selectedColumns.includes(column.title as string);
    })
    .concat(actionsColumn);

  return (
    <CustomTable
      tableKey='report'
      data={data?.result ?? []}
      columns={filteredColumns}
      columnFilters={columnFilters}
    />
  );
};

export default TableSection;
