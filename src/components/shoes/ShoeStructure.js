import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const ShoeStructure = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(items.id)}
      className="
        sm:max-w-xs
        overflow-hidden 
        duration-150 
        shadow-md 
        bg-neutral-50 
        shadow-neutral-300 
        rounded-xl 
        sm:cursor-pointer 
        ring-neutral-400 
        sm:hover:ring-4"
    >
      <img src={items.images[0]} alt={items.id} />
      <section className="flex justify-between px-2 py-1">
        <h1 className="text-xl italic">{items.brand}</h1>
        <span className="flex items-center">
          <p className="mr-1 text-sm text-slate-600">{items.likes}</p>
          <FaHeart className="text-redColor" />
        </span>
      </section>
      <section className="flex justify-between px-2 py-1">
        <p>$ {items.price}</p>
        <p className="text-cartColor">{items.off}% OFF</p>
      </section>
    </div>
  );
};

export default ShoeStructure;
