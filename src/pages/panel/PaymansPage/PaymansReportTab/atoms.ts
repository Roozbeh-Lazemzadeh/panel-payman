import { atom, useAtom } from 'jotai';
import { PaymansReportGetQuery } from 'services/rest/paymans/reports/types';

const filtersAtom = atom<PaymansReportGetQuery>();

export const usePReportFiltersAtom = () => {
  return useAtom(filtersAtom);
};
