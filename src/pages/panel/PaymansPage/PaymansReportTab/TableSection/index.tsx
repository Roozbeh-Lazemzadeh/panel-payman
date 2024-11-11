import moment from 'jalali-moment';
import AppButton from 'components/AppButton';
import { Space, TableColumnsType } from 'antd';
import CustomTable from 'components/AppTable';
import CustomTag from 'components/AppTags';
import { FC } from 'react';
import { usePReportFiltersAtom } from '../atoms';
import { usePaymansReportGetQuery } from 'services/rest/paymans/reports';
import { useSelectedColumns } from 'components/Helpers/columnFilters';
// import SkeletonTableString from 'components/AppSkeleton/SkeletonTable/SkeletonTableString';

const TableSection: FC = () => {
  const [selectedColumns] = useSelectedColumns('p-report');
  const [pReportFilters] = usePReportFiltersAtom();
  const { data } = usePaymansReportGetQuery({
    queryParams: { ...pReportFilters }
  });

  const columnFilters = Object.keys({
    'نام کاربر': '',
    'کد ملی': '',
    'شماره موبایل': '',
    بانک: '',
    'وضعیت پیمان': '',
    'شناسه پیمان': '',
    'شناسه پیگیری': '',
    'تاریخ شروع': '',
    'تاریخ پایان': ''
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
      sorter: (a, b) => {
        return (a.SourceBankName as string).localeCompare(
          b.SourceBankName as string,
          'fa'
        );
      }
    },
    {
      width: 150,
      title: 'وضعیت پیمان',
      dataIndex: 'Status',
      key: 'Status',
      render: (_, record) => {
        const modifier =
          record.Status === 'فعال'
            ? 'green'
            : record.Status === 'غیرفعال'
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
      title: 'شناسه پیگیری',
      dataIndex: 'Umr',
      key: 'Umr'
    },
    {
      width: 150,
      title: 'تاریخ شروع',
      dataIndex: 'PaymanStartDate',
      key: 'PaymanStartDate',
      sorter: (a, b) => {
        const dateA = moment(a.paymanStartDate, 'jYYYY/jMM/jDD');
        const dateB = moment(b.paymanStartDate, 'jYYYY/jMM/jDD');
        return dateA.valueOf() - dateB.valueOf();
      }
    },
    {
      width: 150,
      title: 'تاریخ پایان',
      dataIndex: 'PaymanEndDate',
      key: 'PaymanEndDate',
      sorter: (a, b) => {
        const dateA = moment(a.PaymanEndDate, 'jYYYY/jMM/jDD');
        const dateB = moment(b.PaymanEndDate, 'jYYYY/jMM/jDD');
        return dateA.valueOf() - dateB.valueOf();
      }
    }
  ];
  const actionsColumn = {
    width: 180,
    title: 'دسترسی‌ها',
    key: 'actions',
    fixed: 'right' as const,
    render: () => (
      <Space size='middle'>
        <AppButton style={{ width: '8rem' }} modifier='secondary'>
          جزئیات
        </AppButton>
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
      tableKey='report'
      data={data?.result ?? []}
      columns={filteredColumns}
      columnFilters={columnFilters}
    />
  );
};

export default TableSection;
