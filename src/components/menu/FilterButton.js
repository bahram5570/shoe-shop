import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaSlidersH } from 'react-icons/fa';

const FilterButton = (props) => {
  const filterStatus = useSelector((state) => state.filterResultRedux);
  const dark = useSelector((state) => state.darkModeRedux);

  const [showFilters, setShowFilters] = useState(false);

  const showHandler = () => {
    setShowFilters(!showFilters);
    props.onShowFilters();
  };

  return (
    <button
      onClick={showHandler}
      className={`
        relative 
        flex 
        items-center 
        outline-none
        px-2
        rounded
        duration-300
        ${dark ? 'text-neutral-50' : ''}
        ${showFilters ? 'shadow-[0px_0px_7px_#999999_inset]' : ''}
      `}
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
