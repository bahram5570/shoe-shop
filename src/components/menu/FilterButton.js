import { useSelector } from 'react-redux';
import { FaSlidersH } from 'react-icons/fa';

const FilterButton = (props) => {
  const filterStatus = useSelector((state) => state.filterResultRedux);

  return (
    <button
      onClick={() => props.onShowFilters()}
      className="relative flex items-center text-neutral-50 outline-none"
    >
      {filterStatus.hasFilter && (
        <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-md" />
      )}
      <FaSlidersH className="mr-2" />
      Filters
    </button>
  );
};

export default FilterButton;
