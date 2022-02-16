import { FaFilter } from 'react-icons/fa';

const FilterButton = () => {
  return (
    <button className="flex items-center text-neutral-50 px-1 border-2 rounded-lg">
      <FaFilter className="mr-1" />
      Filters
    </button>
  );
};

export default FilterButton;
