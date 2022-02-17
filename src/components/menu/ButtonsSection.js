import { Fragment } from 'react';
import { FaCheck } from 'react-icons/fa';

const ButtonsSection = () => {
  return (
    <Fragment>
      <div className="flex items-center hover:translate-x-1 duration-200 py-1 mb-4">
        <input
          type="checkbox"
          id="available"
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
        <label htmlFor="available" className="cursor-pointer ml-1 text-sm">
          Only Availables
          <FaCheck className="absolute -left-6 top-1 w-3 h-auto text-neutral-50" />
        </label>
      </div>
      <div className="flex justify-end">
        <button
          className="
          rounded-md 
          text-neutral-900
          px-3 
          text-sm 
          border-2 
          border-neutral-800
          active:scale-90 
          duration-100
          ml-4"
        >
          Reset
        </button>
        <button
          className="
          rounded-md 
          text-red-600 
          px-3 
          text-sm 
          border-2 
          border-cartColor 
          active:scale-90 
          duration-100
          ml-4"
        >
          Cancel
        </button>
        <button
          className="
          rounded-md 
          text-neutral-50 
          px-4 
          py-1 
          h-min text-sm 
          bg-cyan-600 
          active:scale-90 
          duration-100 
          ml-4"
        >
          Apply
        </button>
      </div>
    </Fragment>
  );
};

export default ButtonsSection;
