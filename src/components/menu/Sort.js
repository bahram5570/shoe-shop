import { useDispatch } from 'react-redux';
import { sorting } from '../redux/slices/filtersSlice';
import { FaSortAmountDown } from 'react-icons/fa';

const Sort = () => {
  const sortedData = localStorage.getItem('sortMode');
  const dispatch = useDispatch();

  return (
    <div className="flex mr-2 sm:mr-8">
      <label className="flex items-center text-neutral-50 mr-2">
        <FaSortAmountDown className="mr-1" />
        Sort By:
      </label>

      <select
        defaultValue={sortedData ? JSON.parse(sortedData) : 'Relevace'}
        onChange={(e) => dispatch(sorting(e.target.value))}
        className="px-2 py-1 rounded-md outline-none sm:cursor-pointer"
      >
        <option value="Relevace">Relevace</option>
        <option value="High">Price High</option>
        <option value="Low">Price Low</option>
        <option value="Rating">Rating</option>
        <option value="OFF">OFF</option>
      </select>
    </div>
  );
};

export default Sort;
