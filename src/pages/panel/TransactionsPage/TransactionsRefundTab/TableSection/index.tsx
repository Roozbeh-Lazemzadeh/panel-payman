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
    'نام کاربر': '',
    'کد ملی': '',
    'شماره موبایل': '',
    'بانک مبدا': '',
    'بانک مقصد': '',
    'وضعیت پیمان': '',
    'وضعیت تراکنش': '',
    'شناسه پیمان ها': '',
    'سپرده/شبا': '',
    'مبلغ تراکنش ها': 0,
    'کدپیگیری بازپرداخت': '',
    'ساعت تراکنش': '',
    'تاریخ تراکنش': '',
    توضیحات: ''
  }).map((key) => ({
    value: key,
    label: key
  }));

  const columns: TableColumnsType = [
    {
      width: 150,
      title: 'نام کاربر',
      dataIndex: 'Name',
      key: 'Name',
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: (a, b) => {
        return (a.Name as string).localeCompare(b.Name as string, 'fa');
      }
    },
    {
      width: 150,
      title: 'کد ملی',
      dataIndex: 'NationalCode',
      key: 'NationalCode'
    },
    {
      width: 150,
      title: 'شماره موبایل',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber'
    },
    {
      width: 150,
      title: 'بانک مبدا',
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
      width: 150,
      title: 'بانک مقصد',
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
      width: 150,
      title: 'وضعیت پیمان',
      dataIndex: 'MandateStatus',
      key: 'MandateStatus',
      sortDirections: ['ascend', 'descend', 'ascend'],
      render: (_, record) => {
        let modifier = '';

        switch (record.MandateStatus) {
          case 'موفق':
            modifier = 'green';
            break;
          case 'ناموفق':
            modifier = 'red';
            break;
          case 'درحال انجام':
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
      width: 150,
      title: 'وضعیت تراکنش',
      dataIndex: 'Status',
      key: 'Status',
      sortDirections: ['ascend', 'descend', 'ascend'],
      render: (_, record) => {
        const modifier =
          record.Status === 'موفق'
            ? 'green'
            : record.Status === 'ناموفق'
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
      title: 'شناسه پیمان ها',
      dataIndex: 'Umr',
      key: 'Umr'
    },
    {
      width: 150,
      title: 'سپرده/شبا',
      dataIndex: 'Deposit',
      key: 'Deposit'
    },
    {
      width: 150,
      title: 'مبلغ تراکنش ها',
      dataIndex: 'TransactionAmount',
      key: 'TransactionAmount',
      sorter: (a, b) =>
        (a.TransactionAmount as number) - (b.TransactionAmount as number),
      sortDirections: ['ascend', 'descend', 'ascend']
    },
    {
      width: 150,
      title: 'کدپیگیری بازپرداخت',
      dataIndex: 'RefundId',
      key: 'RefundId'
    },
    {
      width: 150,
      title: 'ساعت تراکنش',
      dataIndex: 'TransactionTime',
      key: 'TransactionTime',
      sorter: (a, b) => {
        const timeA = moment(a.TransactionTime, 'HH:mm');
        const timeB = moment(b.TransactionTime, 'HH:mm');
        return timeA.valueOf() - timeB.valueOf();
      }
    },
    {
      width: 150,
      title: 'تاریخ تراکنش',
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
      title: 'توضیحات',
      dataIndex: 'Description',
      key: 'Description'
    }
  ];
  const actionsColumn = {
    width: 200,
    title: 'دسترسی‌ها',
    key: 'actions',
    fixed: 'right' as const,
    render: () => (
      <Space size='middle'>
        <AppButton modifier='secondary'>جزئیات</AppButton>
        <AppButton modifier='default'>استعلام</AppButton>
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
