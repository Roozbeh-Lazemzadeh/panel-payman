import { TransactionsStatisticGetResponse } from './types';

const bankNames = [
  'Melli',
  'Mellat',
  'Saderat',
  'Tejarat',
  'Parsian',
  'Pasargad',
  'Sepah',
  'Eghtesad Novin',
  'Keshavarzi',
  'Maskan',
  'Refah Kargaran',
  'Sanat o Madan',
  'Sarmayeh',
  'Karafarin',
  'Ansar'
];

const mock: TransactionsStatisticGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    SourceBankName: bankNames[i % bankNames.length],
    TransactionStartingDate: `2023/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`,
    TransactionEndingDate: `2023/${Math.floor(1 + Math.random() * 11)
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
