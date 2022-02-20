import { createContext, useContext } from 'react';

export const ContextProvider = createContext();
export const useData = () => useContext(ContextProvider);

export const ContextDispatcher = createContext();
export const useDispatch = () => useContext(ContextDispatcher);
