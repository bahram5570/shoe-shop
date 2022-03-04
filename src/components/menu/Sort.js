import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sorting } from '../redux/slices/filtersSlice';
import { FaSortAmountDown, FaAngleDown, FaCheck } from 'react-icons/fa';

const Sort = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.darkModeRedux);
  const selectedSortMode = useSelector((state) => state.filterResultRedux);

  const items = ['Relevace', 'High', 'Low', 'Rating', 'OFF'];

  const [sortItem, setSortItem] = useState(selectedSortMode);

  useEffect(() => {
    setSortItem(selectedSortMode.sortMode);
  }, [selectedSortMode]);

  const sortHandler = (e) => {
    dispatch(sorting(e.target.value));
    setSortItem(e.target.value);
  };

  return (
    <div
      className={`
      filter_section
      md:mb-0
      md:flex
      w-full
      ${dark ? 'bg-neutral-200 md:bg-transparent' : 'bg-neutral-50'}
    `}
    >
      <p
        className="
        hidden 
        font-extrabold 
        md:flex 
        items-center 
        mr-2 
        md:min-w-fit 
        md:text-sm 
        lg:text-base"
      >
        <FaSortAmountDown className="mr-1" />
        Sort By:
      </p>

      <button
        className="
          md:hidden 
          w-full 
          px-4 
          mb-2 
          outline-none 
          font-extrabold
          flex 
          justify-between 
          items-center"
        data-bs-toggle="collapse"
        data-bs-target="#a0"
        aria-expanded="true"
      >
        Sort By:
        <FaAngleDown className="w-6 h-auto text-neutral-600" />
      </button>

      <div
        id="a0"
        className="
          accordion-collapse 
          show 
          collapse  
          md:flex 
          pb-2 
          md:pb-0"
      >
        {items.map((x) => (
          <span
            key={x}
            className="
              flex 
              items-center 
              justify-between 
              pl-2 
              pr-6 
              md:px-0 
              py-2 
              md:py-0 
              border-b-2 
              md:border-b-0 
              md:mx-3
              md:text-sm 
              md:relative
              lg:text-base
              lg:mx-5"
          >
            <input
              checked={x === sortItem}
              type="radio"
              name="Sort"
              id={x}
              value={x}
              onChange={(e) => sortHandler(e)}
              className="
                appearance-none 
                outline-none
                hidden
                md:cursor-pointer
                md:flex
                md:w-full
                md:h-full
                md:absolute
                md:top-0
                md:left-0
                md:right-0
                md:bottom-0"
            />

            <label
              htmlFor={x}
              className={`
                cursor-pointer 
                duration-300
                ${x === sortItem && 'md:text-redColor md:scale-125'}
              `}
            >
              {x}
            </label>

            <label
              htmlFor={x}
              className={`md:hidden text-transparent ${
                x === sortItem && 'text-current'
              }`}
            >
              <FaCheck />
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sort;
