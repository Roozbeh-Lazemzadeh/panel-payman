import DateObject from 'react-date-object';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import gregorian from 'react-date-object/calendars/gregorian';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

const IsAfterStartingDate = (
  selectedDate: DateObject,
  startingDate: DateObject
): boolean => {
  const nativeSelectedDate = selectedDate.toDate();
  const nativeStartingDate = startingDate.toDate();

  const isSameDay =
    nativeSelectedDate.getFullYear() === nativeStartingDate.getFullYear() &&
    nativeSelectedDate.getMonth() === nativeStartingDate.getMonth() &&
    nativeSelectedDate.getDate() === nativeStartingDate.getDate();

  if (isSameDay) {
    return nativeSelectedDate.getTime() > nativeStartingDate.getTime();
  } else {
    return nativeSelectedDate > nativeStartingDate;
  }
};

const convertDateToGregorian = (date: DateObject) => {
  const gregorianDate = date.convert(gregorian, gregorian_en);
  gregorianDate.subtract(3, 'hours');
  gregorianDate.subtract(30, 'minutes');

  return gregorianDate;
};

const convertDateToUTC = (date: DateObject, toUTC: boolean = false) => {
  const gregorianDate = toUTC
    ? convertDateToGregorian(date)
    : date.convert(gregorian, gregorian_en);

  return gregorianDate.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
};

const convertToPersianDisplay = (date: DateObject) => {
  return date.convert(persian, persian_fa).format('YYYY/MM/DD HH:mm:ss');
};

const convertFromPersianDisplay = (persianDateString: string): DateObject => {
  return new DateObject({
    date: persianDateString,
    format: 'YYYY/MM/DD HH:mm:ss',
    calendar: persian,
    locale: persian_fa
  }).convert(gregorian);
};

const processDate = (
  newDate: DateObject | undefined,
  lastDate: string
): string => {
  if (!newDate) return '';

  const newDateString = newDate.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

  if (newDateString === lastDate) {
    return lastDate;
  } else {
    return convertDateToUTC(newDate, true);
  }
};

export {
  IsAfterStartingDate,
  convertDateToUTC,
  convertToPersianDisplay,
  convertDateToGregorian,
  convertFromPersianDisplay,
  processDate
};
