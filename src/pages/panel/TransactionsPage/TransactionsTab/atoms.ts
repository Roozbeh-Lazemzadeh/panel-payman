import { atom, useAtom } from 'jotai';
import { TransactionsReportGetQuery } from 'services/rest/transactions/reports/types';

const filtersAtom = atom<TransactionsReportGetQuery>();

export const useTReportFiltersAtom = () => {
  return useAtom(filtersAtom);
};
