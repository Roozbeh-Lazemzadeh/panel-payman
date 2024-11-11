import { nanoid } from 'nanoid';
import { ReportsGetResponse } from './types';

const mock: Record<'transactions' | 'paymans', ReportsGetResponse> = {
  transactions: {
    result: [
      {
        id: nanoid(),
        amount: Math.floor(Math.random() * 1_000 + 1),
        title: 'مجموع مبلغ تراکنش‌های موفق',
        updated_at: new Date().toISOString(),
        alert: ''
      },
      {
        id: nanoid(),
        amount: Math.floor(Math.random() * 1_000 + 1),
        title: 'تعداد تراکنش‌های موفق',
        updated_at: new Date().toISOString(),
        alert: ''
      },
      {
        id: nanoid(),
        amount: Math.floor(Math.random() * 1_000 + 1),
        title: 'تعداد تراکنش‌های ناموفق (موجودی ناکافی)',
        updated_at: new Date().toISOString(),
        alert: 'تعداد تراکنش‌های ناموفق'
      },
      {
        id: nanoid(),
        amount: Math.floor(Math.random() * 1_000 + 1),
        title: 'تعداد تراکنش‌های ناموفق (دلایل دیگر)',
        updated_at: new Date().toISOString(),
        alert: 'دلایل دیگر'
      }
    ]
  },
  paymans: {
    result: [
      {
        id: nanoid(),
        amount: Math.floor(Math.random() * 1_000 + 1),
        title: 'تعداد پیمان های جدید',
        updated_at: new Date().toISOString(),
        alert: ''
      },
      {
        id: nanoid(),
        amount: Math.floor(Math.random() * 1_000 + 1),
        title: 'تعداد پیمان های لغو شده',
        updated_at: new Date().toISOString(),
        alert: ''
      },
      {
        id: nanoid(),
        amount: Math.floor(Math.random() * 1_000 + 1),
        title: 'تعداد پیمان های منقضی شده',
        updated_at: new Date().toISOString(),
        alert: ''
      },
      {
        id: nanoid(),
        amount: Math.floor(Math.random() * 1_000 + 1),
        title: 'فروش بر پیمان',
        updated_at: new Date().toISOString(),
        alert: 'فروش بر پیمان'
      }
    ]
  }
};

export default mock;
