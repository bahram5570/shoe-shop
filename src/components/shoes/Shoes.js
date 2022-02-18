import { Fragment } from 'react';
import { data } from '../data/data';
import ShoeStructure from './ShoeStructure';
import Search from '../menu/Search';
import Sort from '../menu/Sort';
import FilterButton from '../menu/FilterButton';
// import Filters from '../menu/Filters';

const Shoes = () => {
  const output = data.products_brief.map((x) => <ShoeStructure items={x} key={x.id} />);

  return (
    <Fragment>
      <div
        className="
                bg-red-800
                sm:relative
                flex 
                flex-col
                sm:flex-row
                max-w-sm
                sm:max-w-none
                sm:w-max
                rounded-lg 
                px-4 
                py-2 
                mb-6 
                mx-auto
                sm:mx-auto
                text-sm"
      >
        <Search />
        <div className="flex justify-between">
          <Sort />
          <FilterButton />
        </div>
      </div>

      {/* <Filters /> */}

      <div className="grid grid-cols-shoesGrid gap-8 sm:gap-14">{output}</div>
    </Fragment>
  );
};

export default Shoes;
