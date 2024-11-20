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
        showNotifyToast('You can select up to 3 items.', <InfoIcon />);
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
          onKeyDown={(e) => {
            if (e.key === 'Backspace') {
              e.stopPropagation();
            }
          }}
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

  const renderMultipleTagLabel = (option: {
    label: { props: { children: string } };
  }) => {
    const value = option.label.props.children;
    const displayValue = value.length > 11 ? `${value.slice(0, 11)}...` : value;

    return (
      <div title={value.length > 11 ? value : undefined}>{displayValue}</div>
    );
  };

  const selectValue = useMemo(() => {
    if (selectedValues.length === 0) return undefined;

    if (singleSelect) {
      const selectedOption = options.find(
        (opt) => opt.value === selectedValues[0]
      );
      return selectedOption
        ? {
            value: selectedOption.value,
            label: renderOptionLabel(selectedOption)
          }
        : undefined;
    }

    return selectedValues
      .map((val) => {
        const option = options.find((opt) => opt.value === val);
        return option
          ? {
              value: option.value,
              label: renderMultipleTagLabel({
                label: { props: { children: option.value } }
              })
            }
          : undefined;
      })
      .filter(Boolean);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValues, singleSelect, options]);

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
          suffixIcon={
            isOpen ? (
              <SelectArrow2 />
            ) : (
              <SelectArrow style={{ transform: 'rotate(180deg)' }} />
            )
          }
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
              ? values
                  .filter((item) => item !== undefined)
                  .map((item) => item.value)
              : [values.value];
            handleChange(selectedValues);
          }}
          value={selectValue}
        />
      </div>
    </>
  );
};

export default SelectInput;
