import { initialValues } from '../../initialValues/initialValues';

const getLocal = (type) => JSON.parse(localStorage.getItem(type));

export const filtersListLogic = () => {
  const list = [];
  const { currentPrices } = initialValues;

  getLocal('category') &&
    getLocal('category').length > 0 &&
    list.push('category');

  getLocal('size') && getLocal('size').length > 0 && list.push('size');

  getLocal('color') && getLocal('color').length > 0 && list.push('color');

  getLocal('price') &&
    (getLocal('price').min !== currentPrices.minPrice ||
      getLocal('price').max !== currentPrices.maxPrice) &&
    list.push('price');

  getLocal('availables') && list.push('availables');

  return list;
};
