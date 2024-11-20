import { APICallsReportGetResponse } from './types';

const mock: APICallsReportGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    BankTitle: ['Melli', 'Saderat', 'Mellat', 'Tejarat'][
      Math.floor(Math.random() * 4)
    ],
    Service: ['Recharge', 'Bill Payment', 'Money Transfer', 'Purchase'][
      Math.floor(Math.random() * 4)
    ],
    IsSucceed: [true, false][Math.floor(Math.random() * 2)],
    ProcessTime: `${Math.floor(Math.random() * 5)}.${Math.floor(Math.random() * 999)}`,
    RequestDate: `2023/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`,
    RequestTime: `${Math.floor(Math.random() * 24)
      .toString()
      .padStart(2, '0')}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0')}`
  }))
};

export default mock;
