import { productsData } from './store';

export const reducer = (state, action) => {
  const currentState = [...productsData];

  switch (action.type) {
    case 'search':
      if (action.payload.trim().length > 0) {
        return currentState.filter((x) =>
          x.brand.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        if (localStorage.getItem('outputDataID')) {
          const dataId = JSON.parse(localStorage.getItem('outputDataID'));
          return productsData.filter((x) => dataId.includes(x.id));
        } else {
          return [];
        }
      }

    case 'filter':
      const categoryFiltering = currentState.filter((x) =>
        action.payload.categoryFilter.length === 0
          ? currentState
          : action.payload.categoryFilter.includes(x.category)
      );

      const sizeFiltering = [];

      if (action.payload.sizeFilter.length === 0) {
        sizeFiltering.push(...categoryFiltering);
      } else {
        categoryFiltering.forEach((element) => {
          for (let i = 0; i < element.size.length; i++) {
            action.payload.sizeFilter.includes(element.size[i]) &&
              sizeFiltering.push(element);
          }
        });
      }

      const priceFiltering = sizeFiltering.filter(
        (x) =>
          x.price >= action.payload.priceFilter.min &&
          x.price <= action.payload.priceFilter.max
      );

      const availableFiltering = action.payload.availableFilter
        ? priceFiltering.filter((x) => x.qt > 0)
        : priceFiltering;

      const outputData = [...new Set(availableFiltering)];

      let outputDataID = [];
      outputData.forEach((x) => outputDataID.push(x.id));
      localStorage.setItem('outputDataID', JSON.stringify(outputDataID));

      return outputData;

    default:
      return state;
  }
};
