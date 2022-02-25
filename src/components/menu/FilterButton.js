import { useReset } from '../store/providers';
import { FaSlidersH } from 'react-icons/fa';

const FilterButton = (props) => {
  const hasFilter = useReset();

  return (
    <button
      onClick={() => props.onShowFilters()}
      className="relative flex items-center text-neutral-50 outline-none"
    >
      {hasFilter && (
        <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-md" />
      )}
      <FaSlidersH className="mr-2" />
      Filters
    </button>
  );
};

export default FilterButton;
