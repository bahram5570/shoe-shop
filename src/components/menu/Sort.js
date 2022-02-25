import { FaSortAmountDown } from 'react-icons/fa';
import { useSortDispatch } from '../store/providers';

const Sort = () => {
  const sortedData = localStorage.getItem('sortMode');
  const dispatch = useSortDispatch();

  return (
    <div className="flex mr-2 sm:mr-8">
      <label className="flex items-center text-neutral-50 mr-2">
        <FaSortAmountDown className="mr-1" />
        Sort By:
      </label>

      <select
        defaultValue={sortedData ? JSON.parse(sortedData) : 'Relevace'}
        onChange={(e) => dispatch({ type: 'sort', payload: e.target.value })}
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
