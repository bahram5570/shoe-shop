import { FaSearch, FaRegMeh } from 'react-icons/fa';

const NothingFound = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl mb-6">Sorry... Nothing found!</p>
      <div className="relative animate-nothingFoundAnim">
        <FaSearch className="w-20 h-auto text-cyan-600" />
        <FaRegMeh className="absolute w-8 h-auto top-4 left-4 text-cyan-600" />
      </div>
    </div>
  );
};

export default NothingFound;
