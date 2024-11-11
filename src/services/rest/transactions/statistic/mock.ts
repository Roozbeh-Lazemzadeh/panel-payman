import { TransactionsStatisticGetResponse } from './types';

const bankNames = [
  'ملی ',
  'ملت',
  'صادرات ',
  'تجارت',
  'پارسیان',
  'پاسارگاد',
  'سپه',
  'اقتصاد نوین',
  'کشاورزی',
  'مسکن',
  'رفاه کارگران',
  'صنعت و معدن',
  'سرمایه',
  'کارآفرین',
  'انصار'
];

const mock: TransactionsStatisticGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    SourceBankName: bankNames[i % bankNames.length],
    TransactionStartingDate: `1402/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`,
    TransactionEndingDate: `1402/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`,
    TotalAmount: Math.floor(Math.random() * 100000) + 5000,
    TotalCount: Math.floor(Math.random() * 100) + 10,
    SucceededTransactionsCount: Math.floor(Math.random() * 80),
    FailedTransactionsCount: Math.floor(Math.random() * 20),
    BalanceFailedTransactionsCount: Math.floor(Math.random() * 10),
    OtherFailedTransactionsCount: Math.floor(Math.random() * 10),
    UnknownTransactionsCount: Math.floor(Math.random() * 5)
  }))
};

export default mock;
