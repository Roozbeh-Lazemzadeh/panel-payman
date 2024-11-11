import { atom, useAtom } from 'jotai';
import { PaymansStatisticGetQuery } from 'services/rest/paymans/statistic/types';

const filtersAtom = atom<PaymansStatisticGetQuery>();

export const usePStatisticFiltersAtom = () => {
  return useAtom(filtersAtom);
};
