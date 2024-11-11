import GreenDot from 'assets/Icons/GreenDot';
import RedDot from 'assets/Icons/RedDot';
import OrangeDot from 'assets/Icons/OrangeDot';
import YellowDot from 'assets/Icons/YellowDot';

const serviceOptions = [
  {
    key: '1',
    label: 'direct-fund-withdrawal-tracking',
    value: 'پیگیری برداشت وجه مستقیم',
    rawLabel: 'پیگیری برداشت وجه مستقیم'
  },
  {
    key: '2',
    label: 'payman-transactions',
    value: 'تراکنش‌های پیمان',
    rawLabel: 'تراکنش‌های پیمان'
  },
  {
    key: '3',
    label: 'receive-account-statement-list',
    value: 'دریافت لیست صورت حساب سپرده از بوم',
    rawLabel: 'دریافت لیست صورت حساب سپرده از بوم'
  },
  {
    key: '4',
    label: 'transfer-approval',
    value: 'تایید واگذاری',
    rawLabel: 'تایید واگذاری'
  },
  {
    key: '5',
    label: 'store-contract-in-database',
    value: 'ذخیره قرارداد در دیتابیس',
    rawLabel: 'ذخیره قرارداد در دیتابیس'
  },
  {
    key: '6',
    label: 'receive-payman-token',
    value: 'دریافت توکن پیمان',
    rawLabel: 'دریافت توکن پیمان'
  },
  {
    key: '7',
    label: 'institute-access-list',
    value: 'لیست دسترسی‌های موسسه',
    rawLabel: 'لیست دسترسی‌های موسسه'
  },
  {
    key: '8',
    label: 'create-payman',
    value: 'ایجاد پیمان',
    rawLabel: 'ایجاد پیمان'
  },
  {
    key: '9',
    label: 'update-payman',
    value: 'بروزرسانی پیمان',
    rawLabel: 'بروزرسانی پیمان'
  },
  {
    key: '10',
    label: 'receive-payman-id',
    value: 'دریافت شناسه پیمان',
    rawLabel: 'دریافت شناسه پیمان'
  },
  {
    key: '11',
    label: 'change-payman-status',
    value: 'تغییر وضعیت پیمان',
    rawLabel: 'تغییر وضعیت پیمان'
  },
  {
    key: '12',
    label: 'track-create-payman',
    value: 'پیگیری ایجاد یک پیمان',
    rawLabel: 'پیگیری ایجاد یک پیمان'
  }
];

const bankOptions = [
  { key: '1', label: 'saman', value: 'سامان' },
  { key: '2', label: 'mellat', value: 'ملت' },
  { key: '3', label: 'tejarat', value: 'تجارت' },
  { key: '4', label: 'melli', value: 'ملی' }
];

const serviceStatusOptions = [
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

export { serviceOptions, serviceStatusOptions, bankOptions };
