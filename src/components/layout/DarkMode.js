import { useDispatch } from 'react-redux';
import { mode } from '../redux/slices/darkModeSlice';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const DarkMode = ({ dark }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(mode())}
      className="
        relative 
        outline-none
        my-1.5
        w-[70px] 
        h-8 
        border-2 
        border-white 
        rounded-2xl 
        hover:scale-110 
        duration-200 
        cursor-pointer"
    >
      <span
        className={`
          h-6 
          w-6 
          rounded-xl 
          flex 
          justify-center 
          items-center 
          absolute 
          duration-200
          top-0.5 
          ${dark ? 'left-10 bg-cyan-400' : 'left-0.5 bg-yellowColor'}
        `}
      >
        {dark ? (
          <BsMoonFill className="text-black" />
        ) : (
          <BsSunFill className="text-black" />
        )}
      </span>

      <span
        className={`
          h-6 
          w-6 
          flex 
          justify-center 
          items-center 
          absolute 
          top-0.5 
          ${dark ? 'left-2' : 'right-2'}
        `}
      >
        <p className="text-xs">{dark ? 'Dark' : 'Light'}</p>
      </span>
    </div>
  );
};

export default DarkMode;
