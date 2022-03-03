import { data } from '../data/data';
import { sortingLogic } from './logics/sortingLogic';
import { hasFilterLogic } from './logics/hasFilterLogic';

const sortedData = localStorage.getItem('sortMode');

const originalData = Object.values(data);

export const productsData = sortedData
  ? sortingLogic(JSON.parse(sortedData), originalData)
  : originalData;

export const initialFilterData = () => {
  if (localStorage.getItem('outputDataID')) {
    const dataId = JSON.parse(localStorage.getItem('outputDataID'));
    return productsData.filter((x) => dataId.includes(x.id));
  } else {
    return productsData;
  }
};

export const hasFilterData = () => {
  return hasFilterLogic(productsData, initialFilterData());
};

export const initialSortMode = () => {
  return JSON.parse(localStorage.getItem('sortMode')) || 'Relevace';
};
