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
      ${x.name === 'White' ? 'border-2 border-black p-1.5' : 'p-2 '}
    `}
    />
  ));

  return (
    <div
      onClick={() => navigate(items.id)}
      className={`
        relative
        h-fit
        sm:max-w-xs
        overflow-hidden 
        duration-150 
        shadow-[0_0_10px_#aaaaaa]
        rounded-lg 
        sm:cursor-pointer         
        ${
          dark
            ? 'sm:hover:shadow-[0_0_20px_#ffffff]'
            : 'sm:hover:shadow-[0_0_20px_#000000]'
        }
        ${dark ? 'shadow-none bg-neutral-200' : ''}
      `}
    >
      <img src={items.images[0]} alt={items.id} />

      <span className="absolute top-4 right-4 flex items-center">
        <p className="mr-1 text-slate-600">
          {useLikes(items.likes, currentLikes, items.id)}
        </p>
        <FaHeart className="text-redColor w-5 h-auto" />
      </span>

      {items.qt === 0 && (
        <p className="absolute top-1/4 sm:top-1/3 left-1/4 text-redColor text-3xl sm:text-5xl rotate-45">
          Sold Out!
        </p>
      )}

      <section className="sm:flex sm:justify-between px-2 sm:px-4 sm:py-2">
        <h1 className="text-xl italic">{items.brand}</h1>
        <div className="flex justify-end mt-1 sm:mt-0">
          <span className="flex items-center">{itemColors}</span>
        </div>
      </section>

      <section className="flex justify-between px-2 sm:px-4 pt-3 sm:pt-2 pb-3 text-sm sm:text-lg text-white">
        <p className="bg-redColor px-2 sm:px-3 rounded-2xl w-fit">
          {items.off}% OFF
        </p>
        <p className="bg-neutral-800 px-2 sm:px-3 rounded-md w-fit">
          $ {items.price}
        </p>
      </section>
    </div>
  );
};

export default ShoeStructure;
