import { TransactionsReportGetResponse } from './types';

const mock: TransactionsReportGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    Name: [
      'Babak Jafari',
      'Ali Rezaei',
      'Maryam Naderi',
      'Saeed Mousavi',
      'Babak Jafari',
      'Masoud Fallahi',
      'Reza Mohammadi',
      'Nahid Khodadadi',
      'Leila Heydari',
      'Farhad Mousavi',
      'Sara Nikfar'
    ][Math.floor(Math.random() * 4)],
    NationalCode: String(1000000000 + Math.floor(Math.random() * 9000000000)),
    PhoneNumber:
      '09' + String(100000000 + Math.floor(Math.random() * 900000000)),
    SourceBankName: ['Melli', 'Saderat', 'Mellat', 'Tejarat'][
      Math.floor(Math.random() * 4)
    ],
    Status: ['Successful', 'Unsuccessful'][Math.floor(Math.random() * 2)],
    Umr: String(100000 + Math.floor(Math.random() * 900000)),
    ReferenceId: String(100000 + Math.floor(Math.random() * 900000)),
    TransactionAmount: 100000 + Math.floor(Math.random() * 9000000),
    TraceId: String(100000 + Math.floor(Math.random() * 900000)),
    TransactionTime: `${Math.floor(Math.random() * 24)
      .toString()
      .padStart(2, '0')}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0')}`,
    TransactionDate: `2023/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`
  }))
};

export default mock;
