import { sortingLogic } from './sortingLogic';

const sorting = (results) => {
  if (localStorage.getItem('sortMode')) {
    return sortingLogic(JSON.parse(localStorage.getItem('sortMode')), results);
  } else {
    return results;
  }
};

export const searchLogic = (text, inputData) => {
  if (text.trim().length > 0) {
    return inputData.filter((x) =>
      x.brand.toLowerCase().includes(text.toLowerCase())
    );
  } else {
    if (localStorage.getItem('outputDataID')) {
      const dataId = JSON.parse(localStorage.getItem('outputDataID'));
      const output = inputData.filter((x) => dataId.includes(x.id));
      return sorting(output);
    } else {
      return sorting(inputData);
    }
  }
};
