import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ShoeStructure from './ShoeStructure';
import Search from '../menu/Search';
import Sort from '../menu/Sort';
import FilterButton from '../menu/FilterButton';
import Filters from '../menu/Filters';
import NothingFound from './NothingFound';

const Shoes = () => {
  const dark = useSelector((state) => state.darkModeRedux);
  const filteredData = useSelector((state) => state.filterResultRedux);

  const output = filteredData.outputData.map((x) => (
    <ShoeStructure items={x} key={x.id} />
  ));

  const [showFilters, setShowFilters] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-between">
        <Filters
          onCloseFilters={() => setShowFilters(!showFilters)}
          showFilters={showFilters}
        />

        <div className="w-full">
          <div
            className={`
              md:sticky
              md:top-4
              md:z-10
              md:h-fit
              flex 
              px-4 
              py-2 
              mb-6 
              shadow-[0_0_10px_#888888]
              rounded-lg
              ${dark && 'md:bg-neutral-200'}
            `}
          >
            <section className="flex items-center w-full md:hidden">
              <Search />
              <FilterButton
                onShowFilters={() => setShowFilters(!showFilters)}
              />
            </section>

            <section
              className="
                hidden 
                md:flex 
                md:w-full"
            >
              <Sort />
            </section>
          </div>

          {output.length !== 0 && (
            <div className="w-full grid grid-cols-shoesGrid gap-8 sm:gap-10">
              {output}
            </div>
          )}
          {output.length === 0 && <NothingFound />}
        </div>
      </div>
    </Fragment>
  );
};

export default Shoes;
