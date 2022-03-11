import { useSelector } from 'react-redux';
import { FaRegMeh } from 'react-icons/fa';

const PageNotFound = () => {
  const dark = useSelector((state) => state.darkModeRedux);

  return (
    <div className="flex flex-col items-center mt-4">
      <span
        className={`flex items-center  font-bold mb-6 animate-bounce ${
          dark ? 'text-white' : 'text-cyan-600'
        }`}
      >
        <p className="text-8xl">4</p>
        <FaRegMeh className="text-7xl mx-4" />
        <p className="text-8xl">4</p>
      </span>
      <p className={`text-3xl ${dark ? 'text-white' : ''}`}>Page Not Found!</p>
    </div>
  );
};

export default PageNotFound;
