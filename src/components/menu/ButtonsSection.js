import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtering, reseting } from '../redux/slices/filtersSlice';
import { FaCheck } from 'react-icons/fa';

const ButtonsSection = ({ onCloseFilters }) => {
  const initialState = () => {
    if (localStorage.getItem('availables')) {
      const value = localStorage.getItem('availables');
      return value === 'true' ? true : false;
    } else {
      return false;
    }
  };

  const filteredData = useSelector(
    (state) => state.filterResultRedux
  ).filtersList;
  const dispatch = useDispatch();

  const [availableChecked, setAvailableChecked] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('availables', availableChecked);
    dispatch(filtering());
  }, [availableChecked, dispatch]);

  useEffect(() => {
    if (filteredData.length === 0) {
      setAvailableChecked(false);
    }
  }, [filteredData.length]);

  const resetHandler = () => {
    dispatch(reseting());
    onCloseFilters();
  };

  return (
    <Fragment>
      <div className="flex items-center py-1 mb-4 duration-200 hover:translate-x-1">
        <input
          checked={availableChecked}
          onChange={() => setAvailableChecked(!availableChecked)}
          type="checkbox"
          id="available"
          className="
            w-5 
            h-5 
            duration-150 
            border-2 
            rounded-sm 
            outline-none 
            appearance-none 
            cursor-pointer 
            border-cyan-500 
            bg-neutral-50 
            checked:bg-cyan-500"
        />
        <label
          htmlFor="available"
          className="ml-1 text-sm cursor-pointer relative"
        >
          Only Availables
          <FaCheck className="absolute w-3 h-auto top-1 -left-5 text-neutral-50" />
        </label>
      </div>

      <div className="flex justify-end mb-3">
        <button
          onClick={() => resetHandler()}
          className="
            px-3 
            ml-4 
            text-sm 
            duration-100 
            rounded-md 
            text-neutral-50 
            bg-neutral-700 
            active:scale-90"
        >
          Reset
        </button>

        <button
          onClick={() => onCloseFilters()}
          className="
            md:hidden
            px-3 
            ml-4 
            text-sm 
            duration-100 
            border-2 
            rounded-md 
            border-redColor 
            active:scale-90 
            text-redColor"
        >
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default ButtonsSection;
