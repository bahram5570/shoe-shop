import { initialValue } from './store';

export const reducer = (state, action) => {
  const currentState = [...initialValue];

  switch (action.type) {
    case 'search':
      const searchedData = currentState.filter((x) =>
        x.brand.toLowerCase().includes(action.payload.toLowerCase())
      );
      return searchedData;

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
          x.price > action.payload.priceFilter.min &&
          x.price < action.payload.priceFilter.max
      );

      return priceFiltering;

    default:
      return state;
  }
};
