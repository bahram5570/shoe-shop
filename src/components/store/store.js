import { useReducer } from 'react';
import { data } from '../data/data';
import { reducer } from './reducer';
import { ContextProvider } from './providers';
import { ContextDispatcher } from './providers';


export const productsData = Object.values(data);
const initialFilterData = localStorage.getItem('outputData')
  ? JSON.parse(localStorage.getItem('outputData'))
  : productsData;

const ContextWrapper = ({ children }) => {
  const [filteredData, dispatch] = useReducer(reducer, initialFilterData);

  return (
    <ContextProvider.Provider value={filteredData}>
      <ContextDispatcher.Provider value={dispatch}>
        {children}
      </ContextDispatcher.Provider>
    </ContextProvider.Provider>
  );
};

export default ContextWrapper;
