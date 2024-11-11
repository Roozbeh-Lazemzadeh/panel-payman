import moment from 'jalali-moment';
import AppButton from 'components/AppButton';
import { Space, TableColumnsType } from 'antd';
import CustomTable from 'components/AppTable';
import CustomTag from 'components/AppTags';
import { FC } from 'react';
import { useSelectedColumns } from 'components/Helpers/columnFilters';
import { useServicesReportFiltersAtom } from '../atoms';
import { useAPICallsReportGetQuery } from 'services/rest/services/report';

const TableSection: FC = () => {
  const [selectedColumns] = useSelectedColumns('s-report');
  const [sReportFilters] = useServicesReportFiltersAtom();
  const { data } = useAPICallsReportGetQuery({
    queryParams: { ...sReportFilters }
  });

  const columnFilters = Object.keys({
    سرویس: '',
    بانک: '',
    وضعیت: '',
    'زمان پاسخگویی (میلی ثانیه )': '',
    تاریخ: '',
    ساعت: ''
  }).map((key) => ({
    value: key,
    label: key
  }));

  const columns: TableColumnsType = [
    {
      width: 150,
      title: 'بانک',
      dataIndex: 'BankTitle',
      key: 'BankTitle',
      sorter: (a, b) => {
        return (a.BankTitle as string).localeCompare(
          b.BankTitle as string,
          'fa'
        );
      }
    },

    {
      width: 150,
      title: 'سرویس',
      dataIndex: 'Service',
      key: 'Service',
      sorter: (a, b) => {
        return (a.Service as string).localeCompare(b.Service as string, 'fa');
      }
    },

    {
      width: 150,
      title: 'وضعیت',
      dataIndex: 'IsSucceed',
      key: 'IsSucceed',
      render: (_, record) => {
        const modifier = record.IsSucceed ? 'green' : 'red';
        const text = record.IsSucceed ? 'موفق' : 'ناموفق';

        return <CustomTag modifier={modifier}>{text}</CustomTag>;
      },
      sorter: (a, b) => {
        const getText = (isSucceed: boolean) => (isSucceed ? 'موفق' : 'ناموفق');
        const textA = getText(a.IsSucceed);
        const textB = getText(b.IsSucceed);

        return textA.localeCompare(textB, 'fa');
      }
    },

    {
      width: 160,
      title: 'زمان پاسخگویی (میلی ثانیه )',
      dataIndex: 'ProcessTime',
      key: 'ProcessTime',
      sorter: (a, b) => {
        return (a.ProcessTime as string).localeCompare(
          b.ProcessTime as string,
          'fa'
        );
      }
    },

    {
      width: 150,
      title: 'ساعت',
      dataIndex: 'RequestTime',
      key: 'RequestTime',
      sorter: (a, b) => {
        const timeA = moment(a.RequestTime, 'HH:mm');
        const timeB = moment(b.RequestTime, 'HH:mm');
        return timeA.valueOf() - timeB.valueOf();
      }
    },

    {
      width: 150,
      title: 'تاریخ',
      dataIndex: 'RequestDate',
      key: 'RequestDate',
      sorter: (a, b) => {
        const dateA = moment(a.RequestDate, 'jYYYY/jMM/jDD');
        const dateB = moment(b.RequestDate, 'jYYYY/jMM/jDD');
        return dateA.valueOf() - dateB.valueOf();
      }
    }
  ];
  const actionsColumn = {
    width: 100,
    title: 'دسترسی‌ها',
    key: 'actions',
    fixed: 'right' as const,
    render: () => (
      <Space size='middle'>
        <AppButton modifier='secondary'>جزئیات</AppButton>
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
