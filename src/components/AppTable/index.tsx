import { useCallback, useEffect, useRef, useState } from 'react';
import { Table } from 'antd';
import CustomPagination from './customPagination/CustomPagination';
import { ColumnsType } from 'antd/es/table';
import styles from './styles.module.scss';
import TableOptions from './TableOptions';
import { selectedCountAtom } from 'store/table-atoms';
import { useAtom } from 'jotai';
import { calculateReduction } from './helpers';

type CustomTableProps = {
  data: object[];
  columns: ColumnsType<object>;
  columnFilters: { value: string; label: string }[];
  tableKey: string;
};

const CustomTable: React.FC<CustomTableProps> = ({
  data,
  columns,
  columnFilters,
  tableKey
}) => {
  const [current, setCurrent] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [scrollY, setScrollY] = useState(65);
  const tableRef = useRef<HTMLDivElement>(null);
  const [selectedCount] = useAtom(selectedCountAtom);

  const pageSize = +selectedCount;

  const handlePaginationChange = (page: number) => {
    setCurrent(page);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selected: React.Key[]) => setSelectedRowKeys(selected),
    fixed: true
  };

  const paginatedData = data.slice(
    (current - 1) * pageSize,
    current * pageSize
  );

  const updateScrollHeight = useCallback(() => {
    if (tableRef.current) {
      const windowHeight = window.innerHeight;
      const tableTop = tableRef.current.getBoundingClientRect().top;
      const reduction = calculateReduction(tableTop, windowHeight);
      const newScrollY = windowHeight - tableTop - reduction;
      const alternativeScrollY = newScrollY < 40 ? 25 : 55;
      setScrollY(Math.max(newScrollY, alternativeScrollY));
    }
  }, []);

  useEffect(() => {
    updateScrollHeight();
    window.addEventListener('resize', updateScrollHeight);
    return () => window.removeEventListener('resize', updateScrollHeight);
  }, [paginatedData, updateScrollHeight]);

  return (
    <div className={styles['custom-table']}>
      <TableOptions columnFilters={columnFilters} />
      <div ref={tableRef}>
        <Table
          key={tableKey}
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
          rowSelection={rowSelection}
          scroll={{ y: scrollY, x: 400 }}
          showSorterTooltip={false}
          className={`${styles['custom-table__content']} `}
          rowKey='Id'
        />
      </div>
      <CustomPagination
        current={current}
        total={data.length}
        pageSize={pageSize}
        onChange={handlePaginationChange}
        selectedItemsCount={selectedRowKeys.length}
      />
    </div>
  );
};

export default CustomTable;
