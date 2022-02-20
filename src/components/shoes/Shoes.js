import { Fragment } from 'react';
import { data } from '../data/data';
import ShoeStructure from './ShoeStructure';
import Search from '../menu/Search';
import Sort from '../menu/Sort';
import FilterButton from '../menu/FilterButton';
// import Filters from '../menu/Filters';

const Shoes = () => {
  const allData = [];
  for (const x in data) {
    allData.push(data[x])
  };
  
  const output = allData.map((x) => <ShoeStructure items={x} key={x.id} />);

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
          <FilterButton />
        </div>
      </div>

      {/* <Filters /> */}

      <div className="grid gap-8 grid-cols-shoesGrid sm:gap-14">{output}</div>
    </Fragment>
  );
};

export default Shoes;
