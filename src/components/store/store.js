import { useReducer } from 'react';
import { data } from '../data/data';
import { reducer } from './reducer';
import { ContextProvider } from './providers';
import { ContextDispatcher } from './providers';

export const initialValue = [];
for (const i in data) {
  initialValue.push(data[i]);
}

const ContextWrapper = ({ children }) => {
  const [filteredData, dispatch] = useReducer(reducer, initialValue);

  return (
    <ContextProvider.Provider value={filteredData}>
      <ContextDispatcher.Provider value={dispatch}>
        {children}
      </ContextDispatcher.Provider>
    </ContextProvider.Provider>
  );
};

export default ContextWrapper;
