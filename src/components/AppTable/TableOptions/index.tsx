import { FC, useEffect, useState } from 'react';
import { Button, Checkbox, Dropdown, Select } from 'antd';
import { MenuProps } from 'antd/lib';
import Excel from 'assets/Icons/Excel';
import ArrowDownOrange from 'assets/Icons/ArrowDownOrange';
import { selectedColumnsAtom, selectedCountAtom } from 'store/table-atoms';
import { useAtom } from 'jotai';
import { formatLabel } from '../helpers';
import styles from './styles.module.scss';

type TableOptionsProps = {
  columnFilters: { value: string; label: string }[];
};

const items: MenuProps['items'] = [
  {
    label: 'خروجی اکسل صفحه جاری',
    key: '1'
  },
  {
    label: 'خروجی اکسل تمام صفحات',
    key: '2'
  },
  {
    label: 'خروجی اکسل موارد انتخاب شده',
    key: '3'
  }
];
const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};
const menuProps = {
  items,
  onClick: handleMenuClick
};

const TableOptions: FC<TableOptionsProps> = ({ columnFilters }) => {
  const [selectedColumns, setSelectedColumns] = useAtom(selectedColumnsAtom);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCount, setSelectedCount] = useAtom(selectedCountAtom); // Use Jotai atom
  const [displayValue, setDisplayValue] = useState('تعداد ۲۰ تا');

  const handleCountChange = (value: string) => {
    setSelectedCount(value); // Update global state with the selected value
    setDisplayValue(
      value === '20'
        ? 'تعداد ۲۰ تا'
        : value === '50'
          ? 'تعداد ۵۰ تا'
          : 'تعداد ۱۰۰ تا'
    );
  };

  // Initialize selectedColumns with all the columnFilter values
  useEffect(() => {
    // Only set selectedColumns if it's not already initialized
    if (selectedColumns.length === 0) {
      const initialColumns = columnFilters.map((filter) => filter.value);
      setSelectedColumns(initialColumns);
    }
  }, [columnFilters, selectedColumns, setSelectedColumns]);

  const handleColumnToggle = (value: string) => {
    setSelectedColumns((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleDropdownVisibleChange = (visible: boolean) => {
    setDropdownVisible(visible);
  };

  const handleCheckboxClick = (e: React.MouseEvent) => {
    // Prevent the event from closing the dropdown
    e.stopPropagation();
  };

  const columnFilterMenu = (
    columnFilters: { value: string; label: string }[]
  ): MenuProps => {
    return {
      items: columnFilters.map((filter) => ({
        key: filter.value,
        label: (
          <div onClick={handleCheckboxClick}>
            <Checkbox
              checked={selectedColumns.includes(filter.value)}
              onChange={() => handleColumnToggle(filter.value)}
            >
              {formatLabel(filter.label)}
            </Checkbox>
          </div>
        )
      }))
    };
  };
  return (
    <div className={styles['table-options']}>
      <div className={styles['table-options__export']}>
        <Dropdown
          placement='bottom'
          menu={menuProps}
          trigger={['click']}
          overlayClassName={styles['custom-dropdown-excel']}
        >
          <Button icon={<Excel />}>خروجی اکسل</Button>
        </Dropdown>
      </div>
      <Select
        defaultValue='تعداد ۲۰ تا'
        style={{ width: '9rem' }}
        suffixIcon={<ArrowDownOrange />}
        onChange={handleCountChange}
        popupClassName={styles['table-options__select-records']}
        placement='bottomLeft'
        title={`تعداد ${selectedCount} تا`}
        value={displayValue}
      >
        <Select.Option value='20'>نمایش تعداد ۲۰ تا</Select.Option>
        <Select.Option value='50'>نمایش تعداد ۵۰ تا</Select.Option>
        <Select.Option value='100'>نمایش تعداد ۱۰۰ تا</Select.Option>
      </Select>

      <Dropdown
        placement='bottomRight'
        trigger={['click']}
        overlayClassName={styles['custom-dropdown-column']}
        menu={columnFilterMenu(columnFilters)}
        onOpenChange={handleDropdownVisibleChange}
        open={dropdownVisible}
      >
        <Button iconPosition='end' icon={<ArrowDownOrange />}>
          نمایش ستون‌ها
        </Button>
      </Dropdown>
    </div>
  );
};

export default TableOptions;