import { useDispatch, useSelector } from 'react-redux';
import { searching } from '../redux/slices/filtersSlice';

const Search = () => {
  const dark = useSelector((state) => state.darkModeRedux);

  const diapatch = useDispatch();

  const searchHandler = (e) => {
    diapatch(searching(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search"
      className={`
          mr-4
          md:mr-0
          my-2
          md:mt-0
          md:mb-6
          px-2 
          py-1 
          rounded-md 
          outline-none 
          w-full
          ${dark ? 'bg-neutral-200' : 'bg-neutral-50 shadow-[0_0_5px_#888888]'}
        `}
      onChange={searchHandler}
    />
  );
};

export default Search;
