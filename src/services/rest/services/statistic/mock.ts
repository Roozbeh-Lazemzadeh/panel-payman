import { APICallsStatisticGetResponse } from './types';

const mock: APICallsStatisticGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => {
    const succeededCount = Math.floor(Math.random() * 1000);
    const failedCount = Math.floor(Math.random() * 1000);
    const totalCount = succeededCount + failedCount;

    return {
      Id: (i + 1).toString(),
      BankTitle: ['ملی', 'صادرات', 'ملت', 'تجارت'][
        Math.floor(Math.random() * 4)
      ],
      Service: ['شارژ', 'پرداخت قبض', 'انتقال وجه', 'خرید'][
        Math.floor(Math.random() * 4)
      ],
      SucceededCount: succeededCount,
      FailedCount: failedCount,
      TotalCount: totalCount
    };
  })
};

export default mock;
