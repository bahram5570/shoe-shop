import { FaSlidersH } from 'react-icons/fa';

const FilterButton = () => {
  return (
      <button className="flex items-center text-neutral-50 ">
        <FaSlidersH className="mr-2" />
        Filters
      </button>
  );
};

export default FilterButton;