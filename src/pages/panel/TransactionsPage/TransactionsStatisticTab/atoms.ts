import { atom, useAtom } from 'jotai';
import { TransactionsStatisticGetQuery } from 'services/rest/transactions/statistic/types';

const filtersAtom = atom<TransactionsStatisticGetQuery>();

export const useTStatisticFiltersAtom = () => {
  return useAtom(filtersAtom);
};
