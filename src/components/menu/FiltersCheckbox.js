import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtering } from '../redux/slices/filtersSlice';
import { FaCheck } from 'react-icons/fa';

const FiltersCheckbox = ({ items, type }) => {
  const initialState = () => {
    if (localStorage.getItem(type)) {
      return JSON.parse(localStorage.getItem(type));
    } else {
      return [];
    }
  };

  const [checkedList, setCheckedList] = useState(initialState());

  const dark = useSelector((state) => state.darkModeRedux);
  const filteredData = useSelector(
    (state) => state.filterResultRedux
  ).filtersList;

  useEffect(() => {
    if (filteredData.length === 0) {
      setCheckedList([]);
    }
  }, [filteredData.length]);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(type, JSON.stringify(checkedList));
    dispatch(filtering());
  }, [type, checkedList, dispatch]);

  const checkedHandler = (e) => {
    if (checkedList.includes(e)) {
      const currentList = [...checkedList];
      setCheckedList(currentList.filter((x) => x !== e));
    } else {
      setCheckedList([...checkedList, e]);
    }
  };

  const outputs = items.map((x) => (
    <span
      key={x}
      className="
        flex 
        items-center 
        w-full
        md:hover:translate-x-1 
        duration-200 
        py-2"
    >
      <input
        onChange={(w) => checkedHandler(x)}
        checked={checkedList.includes(x)}
        id={x}
        type="checkbox"
        className={`
          appearance-none 
          outline-none 
          cursor-pointer 
          w-7 
          h-7 
          border-2 
          rounded-md
          checked:bg-cyan-400
          checked:shadow-none
          duration-150
          ${
            dark
              ? 'shadow-[0_0_3px_#444444_inset]'
              : 'shadow-[0_0_3px_#888888_inset]'
          }
        `}
      />

      <label htmlFor={x} className="cursor-pointer w-full ml-2 relative">
        {x}
        <FaCheck
          className={`
            absolute 
            -left-7 
            top-1 
            w-4 
            h-auto 
            ${dark ? 'text-neutral-200' : 'text-neutral-50'}
          `}
        />
      </label>
    </span>
  ));

  return <Fragment>{outputs}</Fragment>;
};

export default FiltersCheckbox;
