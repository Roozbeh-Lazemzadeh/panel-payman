import { atom, useAtom } from 'jotai';
import { APICallsStatisticGetQuery } from 'services/rest/services/statistic/types';

const filtersAtom = atom<APICallsStatisticGetQuery>();

export const useServicesStatisticFiltersAtom = () => {
  return useAtom(filtersAtom);
};
