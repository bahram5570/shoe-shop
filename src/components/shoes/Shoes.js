import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ShoeStructure from './ShoeStructure';
import Search from '../menu/Search';
import Sort from '../menu/Sort';
import FilterButton from '../menu/FilterButton';
import Filters from '../menu/Filters';
import NothingFound from './NothingFound';

const Shoes = () => {
  const filteredData = useSelector((state) => state.filterResultRedux);
  console.log(filteredData)

  const output = filteredData.outputData.map((x) => (
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
        <div className="grid grid-cols-shoesGrid gap-8 sm:gap-14">{output}</div>
      )}
      {output.length === 0 && <NothingFound />}
    </Fragment>
  );
};

export default Shoes;
