import { productsData } from './store';
import { sortingLogic } from './sortingLogic';
import { searchLogic } from './searchLogic';

export const reducer = (state, action) => {
  const currentState = [...productsData];

  switch (action.type) {
    case 'search':
      return searchLogic(action.payload, currentState);

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

      return (
        sortingLogic(
          JSON.parse(localStorage.getItem('sortMode')),
          outputData
        ) || outputData
      );

    case 'sort':
      localStorage.setItem('sortMode', JSON.stringify(action.payload));
      const result = sortingLogic(action.payload, state);
      return result;

    default:
      return state;
  }
};
