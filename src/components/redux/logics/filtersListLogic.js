const getLocal = (type) => JSON.parse(localStorage.getItem(type));

export const filtersListLogic = () => {
  const list = [];

  getLocal('category') &&
    getLocal('category').length > 0 &&
    list.push('category');

  getLocal('size') && getLocal('size').length > 0 && list.push('size');

  getLocal('color') && getLocal('color').length > 0 && list.push('color');

  getLocal('price') &&
    (getLocal('price').min !== 20 || getLocal('price').max !== 78) &&
    list.push('price');

  getLocal('availables') && list.push('availables');

  return list;
};
