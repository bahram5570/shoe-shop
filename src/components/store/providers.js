import { createContext, useContext } from 'react';

export const FilterProvider = createContext();
export const useData = () => useContext(FilterProvider);

export const FilterDispatcher = createContext();
export const useDispatch = () => useContext(FilterDispatcher);

export const ResetProvider = createContext();
export const useReset = () => useContext(ResetProvider);
