import { atom, useAtom } from 'jotai';
import { TransactionsRefundGetQuery } from 'services/rest/transactions/refund/types';

const filtersAtom = atom<TransactionsRefundGetQuery>();

export const useTRefundFiltersAtom = () => {
  return useAtom(filtersAtom);
};
