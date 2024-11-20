import moment from 'jalali-moment';
import AppButton from 'components/AppButton';
import { Space, TableColumnsType } from 'antd';
import CustomTable from 'components/AppTable';
import CustomTag from 'components/AppTags';
import { FC } from 'react';
import { useTRefundFiltersAtom } from '../atoms';
import { useTransactionsRefundGetQuery } from 'services/rest/transactions/refund';
import { useSelectedColumns } from '../../../../../components/Helpers/columnFilters';

const TableSection: FC = () => {
  const [selectedColumns] = useSelectedColumns('t-refund');
  const [tRefundFilters] = useTRefundFiltersAtom();
  const { data } = useTransactionsRefundGetQuery({
    queryParams: { ...tRefundFilters }
  });

  const columnFilters = Object.keys({
    'User Name': '',
    'National Code': '',
    'Phone Number': '',
    'Source Bank': '',
    'Destination Bank': '',
    'Mandate Status': '',
    'Transaction Status': '',
    'Mandate IDs': '',
    'Deposit/IBAN': '',
    'Transaction Amounts': 0,
    'Refund Tracking Code': '',
    'Transaction Time': '',
    'Transaction Date': '',
    Description: ''
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
      title: 'National Code',
      dataIndex: 'NationalCode',
      key: 'NationalCode'
    },
    {
      width: 150,
      title: 'Phone Number',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber'
    },
    {
      width: 150,
      title: 'Source Bank',
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
      width: 180,
      title: 'Destination Bank',
      dataIndex: 'DestinationBank',
      key: 'DestinationBank',
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: (a, b) => {
        return (a.DestinationBank as string).localeCompare(
          b.DestinationBank as string,
          'fa'
        );
      }
    },
    {
      width: 180,
      title: 'Mandate Status',
      dataIndex: 'MandateStatus',
      key: 'MandateStatus',
      sortDirections: ['ascend', 'descend', 'ascend'],
      render: (_, record) => {
        let modifier = '';

        switch (record.MandateStatus) {
          case 'Successful':
            modifier = 'green';
            break;
          case 'Unsuccessful':
            modifier = 'red';
            break;
          case 'In Progress':
            modifier = 'yellow';
            break;
          default:
            modifier = '';
            break;
        }

        return (
          <CustomTag modifier={modifier}>{record.MandateStatus}</CustomTag>
        );
      },
      sorter: (a, b) => {
        return (a.MandateStatus as string).localeCompare(
          b.MandateStatus as string,
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
      title: 'Mandate IDs',
      dataIndex: 'Umr',
      key: 'Umr'
    },
    {
      width: 150,
      title: 'Deposit/IBAN',
      dataIndex: 'Deposit',
      key: 'Deposit'
    },
    {
      width: 210,
      title: 'Transaction Amounts',
      dataIndex: 'TransactionAmount',
      key: 'TransactionAmount',
      sorter: (a, b) =>
        (a.TransactionAmount as number) - (b.TransactionAmount as number),
      sortDirections: ['ascend', 'descend', 'ascend']
    },
    {
      width: 190,
      title: 'Refund Tracking Code',
      dataIndex: 'RefundId',
      key: 'RefundId'
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
      width: 180,
      title: 'Transaction Date',
      dataIndex: 'TransactionDate',
      key: 'TransactionDate',
      sorter: (a, b) => {
        const dateA = moment(a.TransactionDate, 'jYYYY/jMM/jDD');
        const dateB = moment(b.TransactionDate, 'jYYYY/jMM/jDD');
        return dateA.valueOf() - dateB.valueOf();
      }
    },
    {
      width: 150,
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description'
    }
  ];

  const actionsColumn = {
    width: 200,
    title: 'Actions',
    key: 'actions',
    fixed: 'right' as const,
    render: () => (
      <Space size='middle'>
        <AppButton modifier='secondary'>Details</AppButton>
        <AppButton modifier='default'>Inquiry</AppButton>
      </Space>
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
      tableKey='refund'
      data={data?.result ?? []}
      columns={filteredColumns}
      columnFilters={columnFilters}
    />
  );
};

export default TableSection;
