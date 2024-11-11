import GreenDot from 'assets/Icons/GreenDot';
import RedDot from 'assets/Icons/RedDot';
import OrangeDot from 'assets/Icons/OrangeDot';
import YellowDot from 'assets/Icons/YellowDot';

const bankOptions = [
  { key: '1', label: 'saman', value: 'سامان' },
  { key: '2', label: 'mellat', value: 'ملت' },
  { key: '3', label: 'tejarat', value: 'تجارت' },
  { key: '4', label: 'melli', value: 'ملی' }
];
const transactionStatusOptions = [
  {
    key: '1',
    label: 'successful',
    value: 'موفق',
    icon: <GreenDot />
  },
  {
    key: '2',
    label: 'unsuccessful',
    value: 'ناموفق',
    icon: <RedDot />
  },
  {
    key: '3',
    label: 'pending',
    value: 'منتظر تایید',
    icon: <OrangeDot />
  },
  {
    key: '4',
    label: 'canceled',
    value: 'لغو شده',
    icon: <YellowDot />
  },
  {
    key: '5',
    label: 'expired',
    value: 'منقضی شده',
    icon: <RedDot />
  }
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
export { bankOptions, transactionStatusOptions, paymanStatusOptions };
