import { useState } from 'react';
import { useDispatch } from '../store/providers';
import FiltersCheckbox from './FiltersCheckbox';
import PriceRange from './PriceRange';
import ButtonsSection from './ButtonsSection';

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

  const resetHandler = () => {
    dispatch({
      type: 'filter',
      payload: {
        categoryFilter: [],
        sizeFilter: [],
        priceFilter: {
          min: currentPrices.minPrice,
          max: currentPrices.maxPrice,
        },
        availableFilter: false,
      },
    });

    localStorage.removeItem('category');
    localStorage.removeItem('size');
    localStorage.removeItem('price');
    localStorage.removeItem('availables');
    props.onCloseFilters();
  };

  const dispatch = useDispatch();

  const applyFilterHandler = () => {
    localStorage.setItem('category', JSON.stringify(categoryFilter));
    localStorage.setItem('size', JSON.stringify(sizeFilter));
    localStorage.setItem('price', JSON.stringify(priceFilter));
    localStorage.setItem('availables', JSON.stringify(availableFilter));

    dispatch({
      type: 'filter',
      payload: {
        categoryFilter,
        sizeFilter,
        priceFilter,
        availableFilter,
      },
    });
    props.onCloseFilters();
  };

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-modalColor z-50">
      <div
        className="
        bg-neutral-50 
        rounded-md 
        mx-auto 
        mt-10
        sm:mt-14 
        px-4 
        pt-6 
        h-5/6
        w-fit 
        sm:h-3/4 
        overflow-y-scroll"
      >
        <section className="filter_section">
          <h2 className="filter_h2">Category</h2>
          <FiltersCheckbox
            onFilter={(value) => setCategoryFilter(value)}
            items={currentCategories}
            type="category"
          />
        </section>

        <section className="filter_section">
          <h2 className="filter_h2">Size</h2>
          <FiltersCheckbox
            onFilter={(value) => setSizeFilter(value)}
            items={currentSizes}
            type="size"
          />
        </section>

        <section className="filter_section">
          <h2 className="filter_h2">Price</h2>
          <PriceRange
            items={currentPrices}
            onPrice={(value) => setPriceFilter(value)}
          />
        </section>

        <section className="filter_section">
          <ButtonsSection
            onReset={() => resetHandler()}
            onAvailable={(x) => setAvailableFilter(x)}
            onCloseFilters={() => props.onCloseFilters()}
            onApplyFilters={applyFilterHandler}
          />
        </section>
      </div>
    </div>
  );
};

export default Filters;
