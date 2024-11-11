import { Input, Select } from 'antd';
import { useMemo, useState, type FC } from 'react';
import styles from './styles.module.scss';
import SelectArrow from 'assets/Icons/SelectArrow';
import SelectArrow2 from 'assets/Icons/SelectArrow2';
import clsx from 'clsx';
import { showNotifyToast } from 'components/AppToast';
import InfoIcon from 'assets/Icons/InfoIcon';

type Option = {
  rawLabel?: string;
  key: string;
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type Props = {
  title: string;
  search?: boolean;
  options: Option[];
  icon?: boolean;
  placeholder: string;
  searchPlaceholder?: string;
  notFoundContent?: string;
  className?: string;
  onChange?: (value: string[]) => void;
  singleSelect?: boolean;
};

const SelectInput: FC<Props> = ({
  title,
  search = false,
  options,
  icon,
  placeholder,
  searchPlaceholder,
  notFoundContent,
  className,
  onChange,
  singleSelect = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  console.log(options[2].icon);

  const handleChange = (newValue: string[] | string) => {
    const newValues = Array.isArray(newValue) ? newValue : [newValue];

    if (singleSelect) {
      setSelectedValues(newValues);
      if (onChange) {
        onChange(newValues);
      }
    } else {
      if (newValues.length <= 3) {
        setSelectedValues(newValues);
        if (onChange) {
          onChange(newValues);
        }
      } else {
        showNotifyToast(
          'حداکثر 3 مورد را می‌توانید انتخاب کنید.',
          <InfoIcon />
        );
      }
    }
  };

  const handleDropdownVisibleChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const filterOption = (
    input: string,
    option: { label: string; value: string }
  ) => {
    return option.value.toLowerCase().includes(input.toLowerCase());
  };

  const filteredOptions = useMemo(() => {
    return options.filter((option) => filterOption(searchValue, option));
  }, [options, searchValue]);

  const dropdownRender = (menu: React.ReactNode) => (
    <div className={styles['select-render-list']}>
      {search && (
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          className={styles['select-render-list__search']}
        />
      )}
      <div className={styles['select-render-list__options']}>{menu}</div>
    </div>
  );

  const renderOptionLabel = (option: Option) => (
    <div className={styles['select-input__option']}>
      <span className={styles['select-input__label']}>{option.value}</span>
      {icon && option.icon && (
        <span className={styles['select-input__icon']}>{option.icon}</span>
      )}
    </div>
  );

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
      <div className={clsx(styles['select-input'], className)}>
        <h3 className={styles['select-input__title']}>{title}</h3>
        <Select
          mode={singleSelect ? undefined : 'multiple'}
          className={styles['select-input__field']}
          placeholder={placeholder}
          maxTagCount={5}
          maxTagTextLength={11}
          labelInValue
          suffixIcon={isOpen ? <SelectArrow2 /> : <SelectArrow />}
          options={filteredOptions.map((option) => ({
            key: option.key,
            value: option.value,
            label: renderOptionLabel(option),
            rawLabel: option.rawLabel
          }))}
          onDropdownVisibleChange={handleDropdownVisibleChange}
          open={isOpen}
          notFoundContent={notFoundContent}
          dropdownRender={dropdownRender}
          filterOption={false}
          onChange={(values) => {
            const selectedValues = Array.isArray(values)
              ? values.map((item) => item.value)
              : [values.value];
            handleChange(selectedValues);
          }}
          value={
            singleSelect
              ? { value: selectedValues[0], label: selectedValues[0] }
              : selectedValues.map((val) => ({ value: val, label: val }))
          }
        />
      </div>
    </>
  );
};

export default SelectInput;
