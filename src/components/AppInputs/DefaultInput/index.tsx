import { Input } from 'antd';
import type { ChangeEvent, FC } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import CloseSquare from 'assets/Icons/CloseSquare';

type Props = {
  title: string;
  className?: string;
  value?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DefaultInput: FC<Props> = ({
  title,
  className,
  value,
  placeholder,
  onChange
}) => {
  return (
    <div className={clsx(styles['default-input'], className)}>
      <h3 className={styles['default-input__title']}>{title}</h3>
      <Input
        className={styles['default-input__field']}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        allowClear={{ clearIcon: <CloseSquare /> }}
      />
    </div>
  );
};

export default DefaultInput;
