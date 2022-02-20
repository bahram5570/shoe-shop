import { useReducer } from 'react';
import { data } from '../data/data';
import { reducer } from './reducer';
import { ContextProvider } from './providers';
import { ContextDispatcher } from './providers';

const initialValue = [];
for (const x in data) {
  initialValue.push(data[x]);
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
