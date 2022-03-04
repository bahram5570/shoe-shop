import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtering, reseting } from '../redux/slices/filtersSlice';
import { FaReply } from 'react-icons/fa';

const ButtonsSection = ({ onCloseFilters }) => {
  const initialState = () => {
    if (localStorage.getItem('availables')) {
      const value = localStorage.getItem('availables');
      return value === 'true' ? true : false;
    } else {
      return false;
    }
  };

  const dark = useSelector((state) => state.darkModeRedux);
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
      <div className="flex justify-between md:justify-center mb-1">
        <button
          onClick={() => onCloseFilters()}
          className="
            md:hidden
            text-redColor
            flex
            items-center
            mb-1
            "
        >
          <FaReply className="mr-2" />
          Back
        </button>

        <button
          onClick={() => resetHandler()}
          className={`
            ${filteredData.length === 0 && 'hidden'}
            bg-transparent
            mb-1
            ${dark ? 'text-sky-500' : 'text-cyan-400'}
          `}
        >
          Reset All Filters
        </button>
      </div>

      <div className="flex justify-between items-center py-1 mb-1 duration-200">
        <label htmlFor="available" className=" cursor-pointer relative">
          Only Availables
        </label>

        <div
          className="
            relative
            w-12
            h-6
            rounded-xl
            shadow-[0_0_2px_#555555_inset]"
        >
          <input
            checked={availableChecked}
            onChange={() => setAvailableChecked(!availableChecked)}
            type="checkbox"
            id="available"
            className="absolute w-full h-full cursor-pointer z-10 appearance-none"
          />

          <span
            className={`
              absolute 
              top-1 
              duration-300
              w-4 
              h-4 
              rounded-lg 
              ${
                availableChecked
                  ? 'left-7 bg-cyan-400'
                  : 'left-1 bg-neutral-500'
              }
            `}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ButtonsSection;
