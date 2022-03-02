import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sorting } from '../redux/slices/filtersSlice';
import { FaSortAmountDown, FaAngleDown } from 'react-icons/fa';

const Sort = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.darkModeRedux);

  const sortedData = localStorage.getItem('sortMode');
  const currentSort = sortedData ? JSON.parse(sortedData) : 'Relevace';

  const [sortItem, setSortItem] = useState(currentSort);

  const sortHandler = (e) => {
    dispatch(sorting(e.target.value));
    setSortItem(e.target.value);
  };

  const items = ['Relevace', 'High', 'Low', 'Rating', 'OFF'];

  return (
    <div
      className={`
      filter_section
      md:mb-0
      md:flex
      md:flex-wrap
      
      w-full
      ${
        dark
          ? 'bg-neutral-200 md:bg-transparent md:text-white'
          : 'bg-neutral-50'
      }
    `}
    >
      <p className="hidden md:flex items-center mr-2">
        <FaSortAmountDown className="mr-1" />
        Sort By:
      </p>

      <button
        className="md:hidden w-full px-4 mb-2 outline-none flex justify-between items-center"
        data-bs-toggle="collapse"
        data-bs-target="#a0"
        aria-expanded="true"
      >
        Sort By:
        <FaAngleDown className="w-6 h-auto text-neutral-600" />
      </button>

      {items.map((x) => (
        <span
          key={x}
          id="a0"
          className="accordion-collapse show collapse flex items-center my-2 md:mx-6 md:relative"
        >
          <input
            defaultChecked={x === sortItem}
            type="radio"
            name="Sort"
            id={x}
            value={x}
            onChange={(e) => sortHandler(e)}
            className="
              appearance-none 
              outline-none
              cursor-pointer
              ml-1 
              mr-4 
              md:m-0
              w-3 
              md:w-full
              h-3 
              md:h-full
              ring-2 
              ring-cyan-400 
              ring-offset-2 
              md:ring-0
              md:ring-offset-0
              rounded-xl 
              md:absolute
              md:top-0
              md:left-0
              md:right-0
              md:bottom-0
              peer
              checked:bg-neutral-800
              md:checked:bg-transparent"
          />

          <label
            htmlFor={x}
            className="cursor-pointer md:text-neutral-500 md:peer-checked:text-black md:peer-checked:font-bold duration-300"
          >
            {x}
          </label>
        </span>
      ))}
    </div>
  );
};

export default Sort;
