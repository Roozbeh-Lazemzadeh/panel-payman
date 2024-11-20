import { TransactionsRefundGetResponse } from './types';

const mock: TransactionsRefundGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    Name: [
      'Babak Jafari',
      'Ali Rezaei',
      'Maryam Naderi',
      'Saeed Mousavi',
      'Masoud Fallahi',
      'Reza Mohammadi',
      'Nahid Khodadadi',
      'Leila Heydari',
      'Farhad Mousavi',
      'Sara Nikfar'
    ][Math.floor(Math.random() * 10)],
    NationalCode: String(1000000000 + Math.floor(Math.random() * 9000000000)),
    PhoneNumber:
      '09' + String(100000000 + Math.floor(Math.random() * 900000000)),
    SourceBankName: ['Melli', 'Saderat', 'Mellat', 'Tejarat'][
      Math.floor(Math.random() * 4)
    ],
    DestinationBank: ['Parsian', 'Ayandeh', 'Sepah', 'Day'][
      Math.floor(Math.random() * 4)
    ],
    MandateStatus: ['In Progress', 'Successful', 'Unsuccessful'][
      Math.floor(Math.random() * 3)
    ],
    Status: ['Successful', 'Unsuccessful'][Math.floor(Math.random() * 2)],
    Umr: String(100000 + Math.floor(Math.random() * 900000)),
    Deposit: String(100000 + Math.floor(Math.random() * 900000)),
    TransactionAmount: 100000 + Math.floor(Math.random() * 9000000),
    RefundId: String(100000 + Math.floor(Math.random() * 900000)),
    TransactionTime: `${Math.floor(Math.random() * 24)
      .toString()
      .padStart(2, '0')}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0')}`,
    TransactionDate: `2023/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`,
    Description: ['Loan Repayment', 'Wrong Payment', 'Transaction Reversal'][
      Math.floor(Math.random() * 3)
    ]
  }))
};

export default mock;
