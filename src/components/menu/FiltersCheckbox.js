import { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';

const FiltersCheckbox = ({ items, type, onFilter }) => {
  const initialState = () => {
    if (localStorage.getItem(type)) {
      return JSON.parse(localStorage.getItem(type));
    } else {
      return [];
    }
  };

  const [checkedList, setCheckedList] = useState(initialState);

  const filterStatus = useSelector((state) => state.filterResult);
  useEffect(() => {
    if (!filterStatus.hasFilter) {
      setCheckedList([]);
    }
  }, [filterStatus]);

  useEffect(() => {
    onFilter(checkedList);
  }, [checkedList, type, onFilter]);

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
      className="
            flex 
            items-center 
            w-fit
            hover:translate-x-1 
            duration-200 
            py-1"
      key={x}
    >
      <input
        onChange={(w) => checkedHandler(x)}
        checked={checkedList.includes(x)}
        id={x}
        type="checkbox"
        className="
                appearance-none 
                outline-none 
                cursor-pointer 
                w-5 
                h-5 
                border-2 
                border-cyan-500 
                rounded-sm 
                bg-neutral-50 
                checked:bg-cyan-500 
                duration-150"
      />
      <label htmlFor={x} className="cursor-pointer ml-2 relative">
        {x}
        <FaCheck className="absolute -left-6 top-1 w-3 h-auto text-neutral-50" />
      </label>
    </span>
  ));

  return <Fragment>{outputs}</Fragment>;
};

export default FiltersCheckbox;
