import { createSlice } from '@reduxjs/toolkit';
import { initialFilterData } from '../initialProductsData';
import { productsData } from '../initialProductsData';
import { initialSortMode } from '../initialProductsData';
import { sortingLogic } from '../logics/sortingLogic';
import { searchLogic } from '../logics/searchLogic';
import { filtersListLogic } from '../logics/filtersListLogic';
import { initialValues } from '../../initialValues/initialValues';

const initialState = {
  outputData: initialFilterData(),
  sortMode: initialSortMode(),
  filtersList: filtersListLogic(),
};

const { currentPrices } = initialValues;

const filtersSlice = createSlice({
  name: 'filtersSlice',
  initialState,
  reducers: {
    filtering: (state) => {
      const categoryItems = JSON.parse(localStorage.getItem('category')) || [];
      const sizeItems = JSON.parse(localStorage.getItem('size')) || [];
      const colorItems = JSON.parse(localStorage.getItem('color')) || [];
      const priceItems = JSON.parse(localStorage.getItem('price')) || {
        min: currentPrices.minPrice,
        max: currentPrices.maxPrice,
      };
      const availablesItems =
        JSON.parse(localStorage.getItem('availables')) || false;

      const categoryFiltering = productsData.filter((x) =>
        categoryItems.length === 0
          ? productsData
          : categoryItems.includes(x.category)
      );

      const sizeFiltering = [];

      if (sizeItems.length === 0) {
        sizeFiltering.push(...categoryFiltering);
      } else {
        categoryFiltering.forEach((element) => {
          for (let i = 0; i < element.size.length; i++) {
            sizeItems.includes(element.size[i]) && sizeFiltering.push(element);
          }
        });
      }

      const colorFiltering = [];

      if (colorItems.length === 0) {
        colorFiltering.push(...sizeFiltering);
      } else {
        sizeFiltering.forEach((element) => {
          for (let i = 0; i < element.colors.length; i++) {
            colorItems.includes(element.colors[i].name) &&
              colorFiltering.push(element);
          }
        });
      }

      const priceFiltering = colorFiltering.filter(
        (x) => x.price >= priceItems.min && x.price <= priceItems.max
      );

      const availableFiltering = availablesItems
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
        filtersList: filtersListLogic(),
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
        sortMode: action.payload,
      };
    },

    reseting: (state) => {
      localStorage.removeItem('category');
      localStorage.removeItem('size');
      localStorage.removeItem('price');
      localStorage.removeItem('color');
      localStorage.removeItem('availables');
      localStorage.removeItem('outputDataID');

      return {
        ...state,
        outputData: sortingLogic(state.sortMode, productsData),
        filtersList: filtersListLogic(),
      };
    },
  },
});

export const { filtering, searching, sorting, reseting } = filtersSlice.actions;
export default filtersSlice.reducer;
