import { Input } from 'antd';
import { useState, type FC } from 'react';
import TomanIcon from 'assets/Icons/Toman';
import BuyIcon from 'assets/Icons/Buy';
import { formatNumberWithCommas } from 'components/Helpers/seperatorInNumbers';
import { persianToEnglishNumber } from 'components/Helpers/persianToEnglishNumbers';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { showNotifyToast } from 'components/AppToast';
import InfoIcon from 'assets/Icons/InfoIcon';

type Props = {
  title: string;
  className?: string;
  icon?: boolean;
  searchPlaceholder?: string;
  notFoundContent?: string;
  value?: [string, string];
  onChange?: (pureValue: [string, string]) => void;
};

const PriceInput: FC<Props> = ({ title, value = ['', ''], onChange }) => {
  const [priceFrom, setPriceFrom] = useState<string>(value[0]);
  const [priceTo, setPriceTo] = useState<string>(value[1]);
  const [purePriceFrom, setPurePriceFrom] = useState<string>(
    persianToEnglishNumber(value[0]?.replace(/,/g, ''))
  );
  const [purePriceTo, setPurePriceTo] = useState<string>(
    persianToEnglishNumber(value[1]?.replace(/,/g, ''))
  );

  const validatePrices = (from: string, to: string) => {
    if (from.length === 0 || to.length === 0) return null;
    if (Number(from) > Number(to)) {
      showNotifyToast(
        'The start amount cannot be greater than the end amount.',
        <InfoIcon />
      );
    }
  };

  const handlePriceFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedValue = persianToEnglishNumber(inputValue.replace(/,/g, ''));
    const numericValue = Number(parsedValue);

    if (inputValue.length === 0) {
      setPriceFrom('');
      setPurePriceFrom('');
      if (onChange) {
        onChange(['', purePriceTo]);
      }
      return;
    }

    if (!isNaN(numericValue) && numericValue <= 1000000000) {
      const formattedValue = formatNumberWithCommas(numericValue);
      setPriceFrom(formattedValue);
      setPurePriceFrom(parsedValue);
      if (onChange) {
        onChange([parsedValue, purePriceTo]);
      }
      validatePrices(parsedValue, purePriceTo); // Validate prices after updating
    } else {
      setPriceFrom(formatNumberWithCommas(Number(purePriceFrom)));
    }
  };

  const handlePriceTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedValue = persianToEnglishNumber(inputValue.replace(/,/g, ''));
    const numericValue = Number(parsedValue);

    if (inputValue.length === 0) {
      setPriceTo('');
      setPurePriceTo('');
      if (onChange) {
        onChange([purePriceFrom, '']);
      }
      return;
    }

    if (!isNaN(numericValue) && numericValue <= 1000000000) {
      const formattedValue = formatNumberWithCommas(numericValue);
      setPriceTo(formattedValue);
      setPurePriceTo(parsedValue);
      if (onChange) {
        onChange([purePriceFrom, parsedValue]);
      }
      validatePrices(purePriceFrom, parsedValue); // Validate prices after updating
    } else {
      setPriceTo(formatNumberWithCommas(Number(purePriceTo)));
    }
  };

  return (
    <div className={styles['price-input']}>
      <h3 className={styles['price-input__title']}>{title}</h3>
      <div className={styles['price-input__inputs-wrapper']}>
        <Input
          type='text'
          inputMode='numeric'
          className={clsx(
            styles['price-input__field'],
            styles['price-input__from']
          )}
          addonAfter={purePriceFrom[0] ? <TomanIcon /> : <BuyIcon />}
          placeholder='From Amount'
          onChange={(e) => handlePriceFrom(e)}
          value={priceFrom}
        />
        <Input
          type='text'
          inputMode='numeric'
          className={clsx(
            styles['price-input__field'],
            styles['price-input__to']
          )}
          addonAfter={purePriceTo[1] ? <TomanIcon /> : <BuyIcon />}
          placeholder='To Amount'
          onChange={(e) => handlePriceTo(e)}
          value={priceTo}
        />
      </div>
    </div>
  );
};

export default PriceInput;
