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
        sm:w-[90px] 
        sm:h-10 
        border-2 
        border-white 
        rounded-full 
        hover:scale-110 
        duration-200 
        cursor-pointer"
    >
      <span
        className={`
          h-6
          w-6
          sm:h-8 
          sm:w-8 
          rounded-full 
          flex 
          justify-center 
          items-center 
          absolute 
          duration-200
          top-0.5 
          ${
            dark
              ? 'left-10 sm:left-[52px] bg-cyan-400'
              : 'left-0.5 bg-yellowColor'
          }
        `}
      >
        {dark ? (
          <BsMoonFill className="text-black w-8/12 h-full" />
        ) : (
          <BsSunFill className="text-black w-8/12 h-full" />
        )}
      </span>

      <span
        className={`
          flex 
          justify-center 
          items-center 
          absolute 
          top-1.5
          ${dark ? 'left-2 sm:left-1.5' : 'right-2 sm:right-1.5'}
        `}
      >
        <p className="text-xs sm:text-base">{dark ? 'Dark' : 'Light'}</p>
      </span>
    </div>
  );
};

export default DarkMode;
