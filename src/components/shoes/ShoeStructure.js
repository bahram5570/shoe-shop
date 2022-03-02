import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';

const ShoeStructure = ({ items }) => {
  const navigate = useNavigate();

  const dark = useSelector((state) => state.darkModeRedux);

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
        rounded-xl 
        sm:cursor-pointer 
        ring-neutral-400 
        sm:hover:ring-4
        ${dark ? 'shadow-none bg-neutral-200' : ''}`}
    >
      <img src={items.images[0]} alt={items.id} />
      {items.qt === 0 && (
        <p className="absolute top-1/3 left-1/4 text-redColor text-5xl rotate-45">
          Sold Out!
        </p>
      )}
      <section className="flex justify-between px-4 py-2">
        <h1 className="text-xl italic">{items.brand}</h1>
        <span className="flex items-center">
          <p className="mr-1 text-sm text-slate-600">{items.likes}</p>
          <FaHeart className="text-redColor" />
        </span>
      </section>
      <section className="flex justify-between px-4 py-2">
        <p>$ {items.price}</p>
        <p className="text-cartColor">{items.off}% OFF</p>
      </section>
    </div>
  );
};

export default ShoeStructure;
