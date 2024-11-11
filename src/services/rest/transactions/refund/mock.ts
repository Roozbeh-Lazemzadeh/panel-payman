import { TransactionsRefundGetResponse } from './types';

const mock: TransactionsRefundGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    Name: [
      'بابک جعفری',
      'علی رضایی',
      'مریم نادری',
      'سعید موسوی',
      'مسعود فلاحی',
      'رضا محمدی',
      'ناهید خدادادی',
      'لیلا حیدری',
      'فرهاد موسوی',
      'سارا نیک‌فر'
    ][Math.floor(Math.random() * 10)],
    NationalCode: String(1000000000 + Math.floor(Math.random() * 9000000000)),
    PhoneNumber:
      '09' + String(100000000 + Math.floor(Math.random() * 900000000)),
    SourceBankName: ['ملی', 'صادرات', 'ملت', 'تجارت'][
      Math.floor(Math.random() * 4)
    ],
    DestinationBank: ['پارسیان', 'آینده', 'سپه', 'دی'][
      Math.floor(Math.random() * 4)
    ],
    MandateStatus: ['درحال انجام', 'موفق', 'ناموفق'][
      Math.floor(Math.random() * 3)
    ],
    Status: ['موفق', 'ناموفق'][Math.floor(Math.random() * 2)],
    Umr: String(100000 + Math.floor(Math.random() * 900000)),
    Deposit: String(100000 + Math.floor(Math.random() * 900000)),
    TransactionAmount: 100000 + Math.floor(Math.random() * 9000000),
    RefundId: String(100000 + Math.floor(Math.random() * 900000)),
    TransactionTime: `${Math.floor(Math.random() * 24)
      .toString()
      .padStart(2, '0')}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0')}`,
    TransactionDate: `1402/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`,
    Description: ['بازپرداخت وام', 'پرداخت اشتباه', 'برگشت تراکنش'][
      Math.floor(Math.random() * 3)
    ]
  }))
};

export default mock;
