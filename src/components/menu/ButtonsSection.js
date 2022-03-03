import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reseting } from '../redux/slices/filtersSlice';
import { FaCheck } from 'react-icons/fa';

const ButtonsSection = (props) => {
  const initialState = () => {
    if (localStorage.getItem('availables')) {
      const value = localStorage.getItem('availables');
      return value === 'true' ? true : false;
    } else {
      return false;
    }
  };

  const [availableChecked, setAvailableChecked] = useState(initialState);

  useEffect(() => {
    props.onAvailable(availableChecked);
  }, [availableChecked, props]);

  const checkedHandler = (mode) => {
    if (mode === 'reset') {
      setAvailableChecked(false);
    } else {
      setAvailableChecked(!availableChecked);
    }
  };

  const dispatch = useDispatch();

  const resetHandler = () => {
    checkedHandler('reset');
    dispatch(reseting());
    props.onReset();
  };

  return (
    <Fragment>
      <div className="flex items-center py-1 mb-4 duration-200 hover:translate-x-1">
        <input
          checked={availableChecked}
          onChange={() => checkedHandler('change')}
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
          onClick={() => props.onCloseFilters()}
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
          Cancel
        </button>
        <button
          onClick={() => props.onApplyFilters()}
          className="
            px-4 
            py-1 
            ml-4 
            text-sm 
            duration-100 
            rounded-md 
            text-neutral-50 
            h-min 
            bg-cyan-500 
            active:scale-90"
        >
          Apply
        </button>
      </div>
    </Fragment>
  );
};

export default ButtonsSection;
