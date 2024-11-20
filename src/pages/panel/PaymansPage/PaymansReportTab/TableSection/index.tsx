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
    'User Name': '',
    'National Code': '',
    'Phone Number': '',
    Bank: '',
    'Payman Status': '',
    'Payman ID': '',
    'Tracking ID': '',
    'Start Date': '',
    'End Date': ''
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
      title: 'Payman Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (_, record) => {
        const modifier =
          record.Status === 'Active'
            ? 'green'
            : record.Status === 'Inactive'
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
      title: 'Payman ID',
      dataIndex: 'Umr',
      key: 'Umr'
    },
    {
      width: 150,
      title: 'Tracking ID',
      dataIndex: 'Umr',
      key: 'Umr'
    },
    {
      width: 150,
      title: 'Start Date',
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
      title: 'End Date',
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
    width: 150,
    title: 'Actions',
    key: 'actions',
    fixed: 'right' as const,
    render: () => (
      <Space size='middle'>
        <AppButton style={{ width: '8rem' }} modifier='secondary'>
          Details
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
