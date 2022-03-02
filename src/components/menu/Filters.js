import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { filtering } from '../redux/slices/filtersSlice';
import FiltersCheckbox from './FiltersCheckbox';
import ButtonsSection from './ButtonsSection';
import PriceRange from './PriceRange';

import Search from '../menu/Search';
import Sort from '../menu/Sort';

const Filters = (props) => {
  const currentCategories = ['Sneaker', 'Oxford', 'Boot'];
  const currentSizes = [38, 39, 40, 41, 42];
  const currentPrices = { minPrice: 20, maxPrice: 78 };

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState({
    min: currentPrices.minPrice,
    max: currentPrices.maxPrice,
  });
  const [availableFilter, setAvailableFilter] = useState(false);

  const dispatch = useDispatch();

  const resetHandler = () => {
    localStorage.removeItem('category');
    localStorage.removeItem('size');
    localStorage.removeItem('price');
    localStorage.removeItem('availables');
    localStorage.removeItem('outputDataID');

    props.onCloseFilters();
  };

  const applyFilterHandler = () => {
    dispatch(
      filtering({
        categoryFilter,
        sizeFilter,
        priceFilter,
        availableFilter,
      })
    );

    localStorage.setItem('category', JSON.stringify(categoryFilter));
    localStorage.setItem('size', JSON.stringify(sizeFilter));
    localStorage.setItem('price', JSON.stringify(priceFilter));
    localStorage.setItem('availables', JSON.stringify(availableFilter));

    props.onCloseFilters();
  };

  const dark = useSelector((state) => state.darkModeRedux);

  return (
    <div
      className={`
        accordion
        duration-300
        md:shadow-[0_0_10px_#aaaaaa]
        rounded-xl
        overflow-hidden
        z-10
        bg-[#000000dd]
        md:bg-transparent
        md:h-screen
        fixed
        top-16
        bottom-4
        md:sticky
        md:top-4
        w-48
        min-w-[300px]
        md:min-w-[300px]
        md:mr-8
        px-4
        py-6
        ${props.showFilters ? '' : '-translate-x-96 md:translate-x-0'}
      `}
    >
      <span className="hidden md:block">
        <Search />
      </span>
      
      <span className="block md:hidden">
        <Sort />
      </span>

      <section
        className={`filter_section ${
          dark ? 'bg-neutral-200' : 'bg-neutral-50 md:shadow-[0_0_5px_#888888]'
        }`}
      >
        <button
          className="w-full px-4 mb-2 outline-none flex justify-between items-center"
          data-bs-toggle="collapse"
          data-bs-target="#a1"
          aria-expanded="true"
        >
          Category
          <FaAngleDown className="w-6 h-auto text-neutral-600" />
        </button>
        <div id="a1" className="accordion-collapse show collapse pb-2">
          <FiltersCheckbox
            onFilter={(value) => {
              setCategoryFilter(value);
            }}
            items={currentCategories}
            type="category"
          />
        </div>
      </section>

      <section
        className={`filter_section ${
          dark ? 'bg-neutral-200' : 'bg-neutral-50 sm:shadow-[0_0_5px_#888888]'
        }`}
      >
        <button
          className="w-full px-4 mb-2 outline-none flex justify-between items-center"
          data-bs-toggle="collapse"
          data-bs-target="#a2"
          aria-expanded="true"
        >
          Size
          <FaAngleDown className="w-6 h-auto text-neutral-600" />
        </button>
        <div id="a2" className="accordion-collapse collapse pb-2">
          <FiltersCheckbox
            onFilter={(value) => setSizeFilter(value)}
            items={currentSizes}
            type="size"
          />
        </div>
      </section>

      <section
        className={`filter_section ${
          dark ? 'bg-neutral-200' : 'bg-neutral-50 sm:shadow-[0_0_5px_#888888]'
        }`}
      >
        <button
          className="w-full px-4 mb-2 outline-none flex justify-between items-center"
          data-bs-toggle="collapse"
          data-bs-target="#a3"
          aria-expanded="true"
        >
          Price
          <FaAngleDown className="w-6 h-auto text-neutral-600" />
        </button>
        <div id="a3" className="accordion-collapse collapse pb-2">
          <PriceRange
            items={currentPrices}
            onPrice={(value) => setPriceFilter(value)}
          />
        </div>
      </section>

      <section
        className={`filter_section ${
          dark ? 'bg-neutral-200' : 'bg-neutral-50 sm:shadow-[0_0_5px_#888888]'
        }`}
      >
        <ButtonsSection
          onReset={() => resetHandler()}
          onAvailable={(x) => setAvailableFilter(x)}
          onCloseFilters={() => props.onCloseFilters()}
          onApplyFilters={applyFilterHandler}
        />
      </section>
    </div>
  );
};

export default Filters;
