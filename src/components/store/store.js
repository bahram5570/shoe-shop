import { useReducer, useState, useEffect } from 'react';
import { data } from '../data/data';
import { reducer } from './reducer';
import { FilterProvider } from './providers';
import { FilterDispatcher } from './providers';
import { ResetProvider } from './providers';

export const productsData = Object.values(data);

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

  const [hasFilter, setHasFilter] = useState(false);

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
          {children}
        </ResetProvider.Provider>
      </FilterDispatcher.Provider>
    </FilterProvider.Provider>
  );
};

export default ContextWrapper;
