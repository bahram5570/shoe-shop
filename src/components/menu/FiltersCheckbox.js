import { Fragment } from 'react';
import { FaCheck } from 'react-icons/fa';

const FiltersCheckbox = ({ items }) => {
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
