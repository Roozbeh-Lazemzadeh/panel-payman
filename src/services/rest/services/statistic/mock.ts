import { APICallsStatisticGetResponse } from './types';

const mock: APICallsStatisticGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => {
    const succeededCount = Math.floor(Math.random() * 1000);
    const failedCount = Math.floor(Math.random() * 1000);
    const totalCount = succeededCount + failedCount;

    return {
      Id: (i + 1).toString(),
      BankTitle: ['Mellat', 'Saderat', 'Mellat', 'Tejarat'][
        Math.floor(Math.random() * 4)
      ],
      Service: ['Charge', 'Bill Payment', 'Money Transfer', 'Purchase'][
        Math.floor(Math.random() * 4)
      ],
      SucceededCount: succeededCount,
      FailedCount: failedCount,
      TotalCount: totalCount
    };
  })
};

export default mock;
