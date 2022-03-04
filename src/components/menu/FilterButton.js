import { useSelector } from 'react-redux';
import { FaSlidersH } from 'react-icons/fa';

const FilterButton = ({ onShowFilters }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  return (
    <button
      onClick={onShowFilters}
      className={`
        relative 
        flex 
        items-center 
        outline-none
        px-2
        py-1
        rounded
        duration-300
        ${dark ? 'bg-neutral-200' : 'bg-neutral-50 shadow-[0_0_5px_#888888]'}
      `}
    >
      <FaSlidersH className="mr-2" />
      Filters
    </button>
  );
};

export default FilterButton;
