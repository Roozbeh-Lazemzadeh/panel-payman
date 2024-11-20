import { PaymansStatisticGetResponse } from './types';

const mock: PaymansStatisticGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    SourceBankName: ['Melli', 'Saderat', 'Mellat', 'Tejarat'][
      Math.floor(Math.random() * 4)
    ],
    PaymanStartDate: `2023/${Math.floor(1 + Math.random() * 12)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 28)
      .toString()
      .padStart(2, '0')}`,
    TotalCount: String(100 + Math.floor(Math.random() * 900)),
    CreatingPaymans: String(10 + Math.floor(Math.random() * 90)),
    AwaitingConfirmPaymans: String(1000 + Math.floor(Math.random() * 9000)),
    ActivePaymans: String(10000 + Math.floor(Math.random() * 90000)),
    CanceledPaymans: String(100 + Math.floor(Math.random() * 900)),
    InactivePaymans: String(1000 + Math.floor(Math.random() * 9000)),
    ExpiredPaymans: String(1000 + Math.floor(Math.random() * 9000))
  }))
};

export default mock;
