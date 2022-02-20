import { FaSortAmountDown } from 'react-icons/fa';

const Sort = () => {
  return (
    <div className="flex mr-8">
      <label className="flex items-center text-neutral-50 mr-2">
        <FaSortAmountDown className="mr-1" />
        Sort By:
      </label>
      <select className="px-2 py-1 rounded-md outline-none sm:cursor-pointer">
        <option value={null}>{'---'}</option>
        <option value="High">Price High</option>
        <option value="Low">Price Low</option>
        <option value="Rating">Rating</option>
        <option value="OFF">OFF</option>
      </select>
    </div>
  );
};

export default Sort;
