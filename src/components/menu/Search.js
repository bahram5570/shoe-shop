import { FaSearch } from 'react-icons/fa';
import { useDispatch } from '../store/providers';

const Search = () => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(e.target.value);
  };

  return (
    <div className="flex sm:mr-8 mb-3 sm:mb-0">
      <label
        htmlFor="search"
        className="flex items-center text-neutral-50 mr-2"
      >
        <FaSearch className="mr-1" />
        Search:
      </label>
      <input
        id="search"
        type="text"
        placeholder="e.g. Skechers"
        className="px-2 py-1 rounded-md outline-none w-full"
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
