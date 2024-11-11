import { atom, useAtom } from 'jotai';
import { APICallsReportGetQuery } from 'services/rest/services/report/types';

const filtersAtom = atom<APICallsReportGetQuery>();

export const useServicesReportFiltersAtom = () => {
  return useAtom(filtersAtom);
};
