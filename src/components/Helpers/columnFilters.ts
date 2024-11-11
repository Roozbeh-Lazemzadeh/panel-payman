import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { currentTabAtom, selectedColumnsAtom } from 'store/table-atoms';

export const useSelectedColumns = (tabName: string) => {
  const [selectedColumns, setSelectedColumns] = useAtom(selectedColumnsAtom);
  const [currentTab, setCurrentTab] = useAtom(currentTabAtom);

  useEffect(() => {
    if (currentTab !== tabName) {
      setSelectedColumns([]);
      setCurrentTab(tabName);
    }
  }, [tabName, currentTab, setSelectedColumns, setCurrentTab]);

  return [selectedColumns, setSelectedColumns] as const;
};
