import { createSlice } from '@reduxjs/toolkit';
import { initialFilterData } from '../initialData';
import { hasFilterData } from '../initialData';
import { productsData } from '../initialData';
import { sortingLogic } from '../logics/sortingLogic';
import { searchLogic } from '../logics/searchLogic';
import { hasFilterLogic } from '../logics/hasFilterLogic';

const filtersSlice = createSlice({
  name: 'filtersSlice',
  initialState: { outputData: initialFilterData(), hasFilter: hasFilterData() },
  reducers: {
    
    filtering: (state, action) => {
      const categoryFiltering = productsData.filter((x) =>
        action.payload.categoryFilter.length === 0
          ? productsData
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

      const result = [...new Set(availableFiltering)];

      let outputDataID = [];
      result.forEach((x) => outputDataID.push(x.id));
      localStorage.setItem('outputDataID', JSON.stringify(outputDataID));

      const storedSortMode = localStorage.getItem('sortMode');

      const resultList = storedSortMode
        ? sortingLogic(JSON.parse(storedSortMode), result)
        : result;

      return {
        ...state,
        outputData: resultList,
        hasFilter: hasFilterLogic(productsData, resultList),
      };
    },

    searching: (state, action) => {
      return { ...state, outputData: searchLogic(action.payload) };
    },

    sorting: (state, action) => {
      localStorage.setItem('sortMode', JSON.stringify(action.payload));
      return {
        ...state,
        outputData: sortingLogic(action.payload, initialFilterData()),
      };
    },

    reseting: () => {
      return { outputData: productsData, hasFilter: false };
    },
  },
});

export const { filtering, searching, sorting, reseting } = filtersSlice.actions;
export default filtersSlice.reducer;
