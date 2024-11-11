import { TableColumnsType } from 'antd';
import CustomTable from 'components/AppTable';
import { FC } from 'react';
import { useSelectedColumns } from 'components/Helpers/columnFilters';
import { useServicesStatisticFiltersAtom } from '../atoms';
import { useAPICallsStatisticGetQuery } from 'services/rest/services/statistic';

const TableSection: FC = () => {
  const [selectedColumns] = useSelectedColumns('s-statistic');
  const [sStatisticFilters] = useServicesStatisticFiltersAtom();
  const { data } = useAPICallsStatisticGetQuery({
    queryParams: { ...sStatisticFilters }
  });

  const columnFilters = Object.keys({
    بانک: '',
    سرویس: '',
    'تعداد موفق': '',
    'تعداد ناموفق': '',
    'تعداد کل': ''
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
      title: 'تعداد موفق',
      dataIndex: 'SucceededCount',
      key: 'SucceededCount',
      sorter: (a, b) => {
        return a.SucceededCount - b.SucceededCount;
      }
    },
    {
      width: 150,
      title: 'تعداد ناموفق',
      dataIndex: 'FailedCount',
      key: 'FailedCount',
      sorter: (a, b) => {
        return a.FailedCount - b.FailedCount;
      }
    },
    {
      width: 150,
      title: 'تعداد کل',
      dataIndex: 'TotalCount',
      key: 'TotalCount',
      sorter: (a, b) => {
        return a.TotalCount - b.TotalCount;
      }
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
