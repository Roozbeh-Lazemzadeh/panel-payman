import { useRef, useState, type FC } from 'react';
import DatePicker, { DateObject, DatePickerRef } from 'react-multi-date-picker';
import Calendar from 'assets/Icons/Calendar';
import styles from './styles.module.scss';
import clsx from 'clsx';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import CloseSquare from 'assets/Icons/CloseSquare';
import { showNotifyToast } from 'components/AppToast';
import InfoIcon from 'assets/Icons/InfoIcon';
import { IsAfterStartingDate } from './utils';

type Props = {
  title: string;
  className?: string;
  value?: [DateObject, DateObject];
  onChange?: (dates: [DateObject | string, DateObject | string]) => void;
  isMandate: boolean;
};

const CalendarInput: FC<Props> = ({
  title,
  className,
  onChange,
  isMandate
}) => {
  const datePickerFromRef = useRef<DatePickerRef>(null);
  const datePickerToRef = useRef<DatePickerRef>(null);
  const [fromDate, setFromDate] = useState<DateObject | null>(null);
  const [toDate, setToDate] = useState<DateObject | null>(null);
  const [fromDateDisplay, setFromDateDisplay] = useState<string>('');
  const [toDateDisplay, setToDateDisplay] = useState<string>('');

  const today = new Date();

  const handleFromDateChange = (selectedDate: DateObject) => {
    if (!toDate || (toDate && IsAfterStartingDate(toDate, selectedDate))) {
      setFromDate(selectedDate);
      setFromDateDisplay(selectedDate.format('YYYY-MM-DD HH:mm'));
      if (onChange) {
        onChange([selectedDate, toDate || '']);
      }
    } else {
      showNotifyToast(
        'The end date cannot be before the start date.',
        <InfoIcon />
      );
    }
  };

  const handleToDateChange = (selectedDate: DateObject) => {
    if (
      !fromDate ||
      (fromDate && IsAfterStartingDate(selectedDate, fromDate))
    ) {
      setToDate(selectedDate);
      setToDateDisplay(selectedDate.format('YYYY-MM-DD HH:mm'));
      if (onChange) {
        onChange([fromDate || '', selectedDate]);
      }
    } else {
      showNotifyToast(
        'The end date cannot be before the start date.',
        <InfoIcon />
      );
    }
  };

  // Function to clear the 'From' date
  const clearFromDate = () => {
    setFromDate(null);
    setFromDateDisplay('');
    if (onChange) {
      onChange(['', toDate ? toDate : '']);
    }
  };

  // Function to clear the 'To' date
  const clearToDate = () => {
    setToDate(null);
    setToDateDisplay('');
    if (onChange) {
      onChange([fromDate ? fromDate : '', '']);
    }
  };

  return (
    <div className={clsx(styles['calendar-input'], className)}>
      <h3 className={styles['calendar-input__title']}>{title}</h3>
      <div className={styles['calendar-input__container']}>
        {/* From Date Picker */}
        <DatePicker
          ref={datePickerFromRef}
          numberOfMonths={2}
          value={fromDate}
          onChange={handleFromDateChange}
          calendarPosition='top-center'
          monthYearSeparator='  '
          className='rmdp-mobile'
          mobileLabels={{
            CANCEL: 'Cancel',
            OK: 'Confirm'
          }}
          plugins={[<TimePicker position='bottom' />]} // Enables time selection
          maxDate={isMandate ? undefined : today}
        />
        <span
          className={`${styles['calendar-input__date-label']} ${styles['calendar-input__date-label--from']} ${fromDateDisplay ? styles['calendar-input__date-label--filled'] : ''}`}
          onClick={() => datePickerFromRef.current?.openCalendar()}
        >
          {fromDateDisplay || 'From Date'}
        </span>
        <div
          className={`${styles['calendar-input__icon']} ${styles['calendar-input__icon--from']}`}
        >
          {fromDateDisplay ? (
            <CloseSquare onClick={clearFromDate} />
          ) : (
            <Calendar
              onClick={() => datePickerFromRef.current?.openCalendar()}
            />
          )}
        </div>

        {/* Divider line */}
        <div className={styles['calendar-input__divider']}></div>

        {/* To Date Picker */}
        <DatePicker
          ref={datePickerToRef}
          numberOfMonths={2}
          value={toDate}
          onChange={handleToDateChange}
          calendarPosition='top-center'
          monthYearSeparator='  '
          className='rmdp-mobile'
          mobileLabels={{
            OK: 'Confirm',
            CANCEL: 'Cancel'
          }}
          plugins={[<TimePicker position='bottom' />]} // Enables time selection
          maxDate={isMandate ? undefined : today}
        />
        <span
          className={`${styles['calendar-input__date-label']} ${styles['calendar-input__date-label--to']} ${toDateDisplay ? styles['calendar-input__date-label--filled'] : ''}`}
          onClick={() => datePickerToRef.current?.openCalendar()}
        >
          {toDateDisplay || 'To Date'}
        </span>
        <div
          className={`${styles['calendar-input__icon']} ${styles['calendar-input__icon--to']}`}
        >
          {toDateDisplay ? (
            <CloseSquare onClick={clearToDate} />
          ) : (
            <Calendar onClick={() => datePickerToRef.current?.openCalendar()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarInput;
