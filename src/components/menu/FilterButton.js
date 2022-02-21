import { FaSlidersH } from 'react-icons/fa';

const FilterButton = (props) => {
  return (
    <button onClick={() => props.onShowFilters()} className="flex items-center text-neutral-50 ">
      <FaSlidersH className="mr-2" />
      Filters
    </button>
  );
};

export default FilterButton;
