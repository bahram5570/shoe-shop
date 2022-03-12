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
        md:w-[85px] 
        md:h-9 
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
          md:h-7 
          md:w-7 
          rounded-full 
          flex 
          justify-center 
          items-center 
          absolute 
          duration-200
          top-0.5 
          ${
            dark
              ? 'left-10 md:left-[51px] bg-cyan-400'
              : 'left-0.5 bg-yellowColor'
          }
        `}
      >
        {dark ? (
          <BsMoonFill className="text-black w-8/12 h-full" />
        ) : (
          <BsSunFill className="text-black w-7/12 h-full" />
        )}
      </span>

      <span
        className={`
          flex 
          justify-center 
          items-center 
          absolute 
          top-1.5
          sm:top-1
          ${dark ? 'left-1 md:left-1.5' : 'right-1 md:right-1.5'}
        `}
      >
        <p className="text-xs md:text-base">{dark ? 'Dark' : 'Light'}</p>
      </span>
    </div>
  );
};

export default DarkMode;
