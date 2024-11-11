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
    'نام کاربر': '',
    'کد ملی': '',
    'شماره موبایل': '',
    بانک: '',
    'وضعیت تراکنش': '',
    'شناسه پیمان': '',
    'شناسه مرجع': '',
    'مبلغ تراکنش': 0,
    'شناسه پیگیری پرداخت': '',
    'ساعت تراکنش': '',
    'تاریخ تراکنش': ''
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
      title: 'بانک',
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
      title: 'شناسه پیمان',
      dataIndex: 'Umr',
      key: 'Umr'
    },
    {
      width: 150,
      title: 'شناسه مرجع',
      dataIndex: 'ReferenceId',
      key: 'ReferenceId'
    },
    {
      width: 150,
      title: 'مبلغ تراکنش',
      dataIndex: 'TransactionAmount',
      key: 'TransactionAmount',
      sorter: (a, b) =>
        (a.TransactionAmount as number) - (b.TransactionAmount as number),
      sortDirections: ['ascend', 'descend', 'ascend']
    },
    {
      width: 200,
      title: 'شناسه پیگیری پرداخت',
      dataIndex: 'TraceId',
      key: 'TraceId'
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
    }
  ];
  const actionsColumn = {
    width: 200,
    title: 'دسترسی‌ها',
    key: 'actions',
    fixed: 'right' as const,
    render: () => (
      <div className={styles['transaction-actionsColumn']}>
        <Space size='middle'>
          <AppButton modifier='secondary'>جزئیات</AppButton>
          <AppButton modifier='default'>استعلام</AppButton>
          {/* <Typography.Link>Action1</Typography.Link>
          <Typography.Link>Action2</Typography.Link> */}
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
