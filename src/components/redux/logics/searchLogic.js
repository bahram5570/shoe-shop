import { sortingLogic } from './sortingLogic';
import { productsData } from '../initialData';

const sorting = (results) => {
  if (localStorage.getItem('sortMode')) {
    return sortingLogic(JSON.parse(localStorage.getItem('sortMode')), results);
  } else {
    return results;
  }
};

export const searchLogic = (text) => {
  if (text.trim().length > 0) {
    return productsData.filter((x) =>
      x.brand.toLowerCase().includes(text.toLowerCase())
    );
  } else {
    if (localStorage.getItem('outputDataID')) {
      const dataId = JSON.parse(localStorage.getItem('outputDataID'));
      const output = productsData.filter((x) => dataId.includes(x.id));
      return sorting(output);
    } else {
      return sorting(productsData);
    }
  }
};
