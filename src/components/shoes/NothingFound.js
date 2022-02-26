import { useSelector } from 'react-redux';
import { FaSearch, FaRegMeh } from 'react-icons/fa';

const NothingFound = () => {
  const dark = useSelector((state) => state.darkMode);

  return (
    <div className="flex flex-col items-center">
      <p className={`text-2xl mb-6 ${dark ? 'text-white' : ''}`}>
        Sorry... Nothing found!
      </p>
      <div className="relative animate-nothingFoundAnim">
        <FaSearch
          className={`w-20 h-auto ${dark ? 'text-white' : 'text-cyan-600'}`}
        />
        <FaRegMeh
          className={`absolute w-8 h-auto top-4 left-4 ${
            dark ? 'text-white' : 'text-cyan-600'
          }`}
        />
      </div>
    </div>
  );
};

export default NothingFound;
