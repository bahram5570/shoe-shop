import { useReducer, useState, useEffect } from 'react';
import { data } from '../data/data';
import { reducer } from './reducer';
import { FilterProvider } from './providers';
import { FilterDispatcher } from './providers';
import { ResetProvider } from './providers';
import { SortDispatcher } from './providers';
import { sortingLogic } from './sortingLogic';

const sortedData = localStorage.getItem('sortMode');

const originalData = Object.values(data);
export const productsData = sortedData
  ? sortingLogic(JSON.parse(sortedData), originalData)
  : originalData;

const initialFilterData = () => {
  if (localStorage.getItem('outputDataID')) {
    const dataId = JSON.parse(localStorage.getItem('outputDataID'));
    return productsData.filter((x) => dataId.includes(x.id));
  } else {
    return productsData;
  }
};

const ContextWrapper = ({ children }) => {
  const [filteredData, dispatch] = useReducer(reducer, initialFilterData());

  const [hasFilter, setHasFilter] = useState(
    Object.keys(data).length !== filteredData.length
  );

  useEffect(() => {
    if (Object.keys(data).length === filteredData.length) {
      setHasFilter(false);
    } else {
      setHasFilter(true);
    }
  }, [filteredData]);

  return (
    <FilterProvider.Provider value={filteredData}>
      <FilterDispatcher.Provider value={dispatch}>
        <ResetProvider.Provider value={hasFilter}>
          <SortDispatcher.Provider value={dispatch}>
            {children}
          </SortDispatcher.Provider>
        </ResetProvider.Provider>
      </FilterDispatcher.Provider>
    </FilterProvider.Provider>
  );
};

export default ContextWrapper;
