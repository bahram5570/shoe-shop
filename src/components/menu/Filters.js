import { useSelector } from 'react-redux';
import FiltersCheckbox from './FiltersCheckbox';
import ButtonsSection from './ButtonsSection';
import PriceRange from './PriceRange';
import Search from '../menu/Search';
import Sort from '../menu/Sort';
import { initialValues } from '../initialValues/initialValues';
import { FaAngleDown } from 'react-icons/fa';

const Filters = (props) => {
  const {
    currentCategories,
    currentSizes,
    currentColors,
    currentGenders,
    currentPrices,
  } = initialValues;

  const dark = useSelector((state) => state.darkModeRedux);
  const filtersList = useSelector(
    (state) => state.filterResultRedux
  ).filtersList;

  const hasFilter = (type) => (
    <span
      className={`
        mr-2
        w-2 
        h-2 
        rounded
        bg-green-500
        ${!filtersList.includes(type) && 'opacity-0'}
      `}
    />
  );

  return (
    <div
      className={`
        accordion
        fixed
        top-0
        left-0
        right-0
        bottom-0
        md:sticky
        md:top-4
        md:h-screen
        min-w-[320px]
        md:min-w-[320px]
        md:mr-6
        p-2
        duration-300
        bg-[#000000dd]
        md:bg-transparent
        overscroll-auto
        overflow-y-auto
        -translate-y-2
        z-40
        ${props.showFilters ? '' : 'top-full'}
      `}
    >
      <div className="md:shadow-[0_0_10px_#888888] p-4 rounded-xl">
        {/* Search */}
        <section className="hidden md:block">
          <Search />
        </section>

        {/* Availables */}
        <section
          className={`filter_section ${
            dark
              ? 'bg-neutral-200'
              : 'bg-neutral-50 sm:shadow-[0_0_5px_#888888]'
          }`}
        >
          <ButtonsSection onCloseFilters={() => props.onCloseFilters()} />
        </section>

        {/* Sort */}
        <section className="block md:hidden w-full">
          <Sort />
        </section>

        {/* Category */}
        <section
          className={`filter_section ${
            dark
              ? 'bg-neutral-200'
              : 'bg-neutral-50 md:shadow-[0_0_5px_#888888]'
          }`}
        >
          <button
            className="w-full px-4 mb-2 outline-none flex justify-between items-center font-extrabold"
            data-bs-toggle="collapse"
            data-bs-target="#a1"
            aria-expanded="true"
          >
            <div className="flex items-center">
              {hasFilter('category')}
              Category
            </div>
            <FaAngleDown className="w-6 h-auto text-neutral-600" />
          </button>

          <div
            id="a1"
            className={`
            accordion-collapse 
            show 
            collapse
            divide-y-2
            ${dark ? 'divide-neutral-400' : 'divide-neutral-300'}
          `}
          >
            <FiltersCheckbox items={currentCategories} type="category" />
          </div>
        </section>

        {/* Size */}
        <section
          className={`filter_section ${
            dark
              ? 'bg-neutral-200'
              : 'bg-neutral-50 sm:shadow-[0_0_5px_#888888]'
          }`}
        >
          <button
            className="w-full px-4 mb-2 outline-none flex justify-between items-center font-extrabold"
            data-bs-toggle="collapse"
            data-bs-target="#a2"
            aria-expanded="true"
          >
            <div className="flex items-center">
              {hasFilter('size')}
              Size
            </div>
            <FaAngleDown className="w-6 h-auto text-neutral-600" />
          </button>
          <div
            id="a2"
            className={`
            accordion-collapse 
            collapse
            divide-y-2
            ${dark ? 'divide-neutral-400' : 'divide-neutral-300'}
          `}
          >
            <FiltersCheckbox items={currentSizes} type="size" />
          </div>
        </section>

        {/* Color */}
        <section
          className={`filter_section ${
            dark
              ? 'bg-neutral-200'
              : 'bg-neutral-50 sm:shadow-[0_0_5px_#888888]'
          }`}
        >
          <button
            className="w-full px-4 mb-2 outline-none flex justify-between items-center font-extrabold"
            data-bs-toggle="collapse"
            data-bs-target="#a3"
            aria-expanded="true"
          >
            <div className="flex items-center">
              {hasFilter('color')}
              Color
            </div>
            <FaAngleDown className="w-6 h-auto text-neutral-600" />
          </button>
          <div
            id="a3"
            className={`
            accordion-collapse 
            collapse
            divide-y-2
            ${dark ? 'divide-neutral-400' : 'divide-neutral-300'}
          `}
          >
            <FiltersCheckbox items={currentColors} type="color" />
          </div>
        </section>

        {/* Gender */}
        <section
          className={`filter_section ${
            dark
              ? 'bg-neutral-200'
              : 'bg-neutral-50 sm:shadow-[0_0_5px_#888888]'
          }`}
        >
          <button
            className="w-full px-4 mb-2 outline-none flex justify-between items-center font-extrabold"
            data-bs-toggle="collapse"
            data-bs-target="#a4"
            aria-expanded="true"
          >
            <div className="flex items-center">
              {hasFilter('gender')}
              Gender
            </div>
            <FaAngleDown className="w-6 h-auto text-neutral-600" />
          </button>
          <div
            id="a4"
            className={`
            accordion-collapse 
            collapse
            divide-y-2
            ${dark ? 'divide-neutral-400' : 'divide-neutral-300'}
          `}
          >
            <FiltersCheckbox items={currentGenders} type="gender" />
          </div>
        </section>

        {/* Price */}
        <section
          className={`filter_section ${
            dark
              ? 'bg-neutral-200'
              : 'bg-neutral-50 sm:shadow-[0_0_5px_#888888]'
          }`}
        >
          <button
            className="w-full px-4 mb-2 outline-none flex justify-between items-center font-extrabold"
            data-bs-toggle="collapse"
            data-bs-target="#a5"
            aria-expanded="true"
          >
            <div className="flex items-center">
              {hasFilter('price')}
              Price
            </div>
            <FaAngleDown className="w-6 h-auto text-neutral-600" />
          </button>
          <div id="a5" className="accordion-collapse collapse">
            <PriceRange items={currentPrices} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Filters;
