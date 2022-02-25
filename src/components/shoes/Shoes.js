import { Fragment, useState } from 'react';
import { useData } from '../store/providers';
import ShoeStructure from './ShoeStructure';
import Search from '../menu/Search';
import Sort from '../menu/Sort';
import FilterButton from '../menu/FilterButton';
import Filters from '../menu/Filters';
import NothingFound from './NothingFound';

const Shoes = () => {
  const filteredData = useData();
  const output = filteredData.map((x) => (
    <ShoeStructure items={x} key={x.id} />
  ));

  const [showFilters, setShowFilters] = useState(false);

  return (
    <Fragment>
      <div
        className="
          flex 
          flex-col 
          max-w-sm 
          px-4 
          py-2 
          mx-auto 
          mb-6 
          text-sm 
          bg-red-800 
          rounded-lg 
          sm:relative 
          sm:flex-row 
          sm:max-w-none 
          sm:w-max 
          sm:mx-auto"
      >
        <Search />
        <div className="flex justify-between">
          <Sort />
          <FilterButton onShowFilters={() => setShowFilters(!showFilters)} />
        </div>
      </div>

      <Filters
        onCloseFilters={() => setShowFilters(!showFilters)}
        showFilters={showFilters}
      />

      {output.length !== 0 && (
        <div className="grid gap-8 grid-cols-shoesGrid sm:gap-14">{output}</div>
      )}
      {output.length === 0 && <NothingFound />}
    </Fragment>
  );
};

export default Shoes;
