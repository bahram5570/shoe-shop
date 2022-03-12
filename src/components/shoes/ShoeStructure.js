import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLikes } from '../product/ProductDetails';
import { FaHeart } from 'react-icons/fa';

const ShoeStructure = ({ items }) => {
  const dark = useSelector((state) => state.darkModeRedux);
  const currentLikes = useSelector((state) => state.likesRedux);

  const navigate = useNavigate();

  const itemColors = items.colors.map((x) => (
    <span
      key={x.name}
      style={{ background: x.code }}
      className={`
        block 
        mx-0.5
        rounded-xl
        ${
          x.name === 'White'
            ? 'border-2 border-black p-1 sm:p-1.5'
            : 'p-1.5 sm:p-2 '
        }
      `}
    />
  ));

  return (
    <div
      onClick={() => navigate(items.id)}
      className={`
        relative
        h-full
        sm:max-w-[270px]
        overflow-hidden 
        duration-150 
        shadow-[0_0_4px_#aaaaaa]
        rounded-lg
        sm:hover:scale-105 
        sm:cursor-pointer         
        ${
          dark
            ? ''
            : 'sm:hover:shadow-[0_0_4px_#000000]'
        }
        ${dark ? 'shadow-none bg-neutral-200' : ''}
      `}
    >
      <img src={items.images[0]} alt={items.id} />

      {items.off > 0 && (
        <section className="absolute top-5 -left-12 text-xs sm:text-base bg-redColor text-white px-12 -rotate-45">
          <p>{items.off}% OFF</p>
        </section>
      )}

      <section className="absolute top-4 right-4 flex items-center">
        <p className="mr-1 text-slate-600">
          {useLikes(items.likes, currentLikes, items.id)}
        </p>
        <FaHeart className="text-redColor w-5 h-auto" />
      </section>

      {items.qt === 0 && (
        <p className="absolute top-1/4 sm:top-1/3 left-1/4 text-redColor text-3xl sm:text-5xl rotate-45">
          Sold Out!
        </p>
      )}

      <section className="flex justify-between px-1 sm:px-4 py-2">
        <h1 className="text-sm sm:text-lg font-bold italic sm:ml-1">
          {items.brand}
        </h1>
        <div className="flex justify-end mt-1 sm:mt-0">
          <span className="flex items-center">{itemColors}</span>
        </div>
      </section>

      <section className="text-sm sm:text-base mx-2 pb-2">
        <p>{items.name}</p>
      </section>

      <section className="flex justify-between items-center px-1 sm:px-4 pt-3 sm:pt-1 pb-3 text-white">
        <p className="bg-cyan-500 px-2 sm:px-3 py-1 rounded-2xl text-xs sm:text-sm">
          View Details
        </p>
        <p className="bg-neutral-800 text-sm sm:text-base px-2 sm:px-3 rounded-xl h-fit">
          {' '}
          $ {items.price}
        </p>
      </section>
    </div>
  );
};

export default ShoeStructure;
