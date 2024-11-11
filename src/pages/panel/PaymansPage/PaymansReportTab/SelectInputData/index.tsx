import GreenDot from 'assets/Icons/GreenDot';
import RedDot from 'assets/Icons/RedDot';
import YellowDot from 'assets/Icons/YellowDot';

const bankOptions = [
  { key: '1', label: 'saman', value: 'سامان' },
  { key: '2', label: 'mellat', value: 'ملت' },
  { key: '3', label: 'tejarat', value: 'تجارت' },
  { key: '4', label: 'melli', value: 'ملی' }
];
const paymanStatusOptions = [
  {
    key: '1',
    label: 'successful',
    value: 'فعال',
    icon: <GreenDot />
  },
  {
    key: '2',
    label: 'unsuccessful',
    value: 'غیرفعال',
    icon: <RedDot />
  },
  {
    key: '3',
    label: 'pending',
    value: 'در حال ایجاد',
    icon: <YellowDot />
  }
];

export { bankOptions, paymanStatusOptions };
