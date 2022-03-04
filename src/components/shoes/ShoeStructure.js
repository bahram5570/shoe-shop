import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';

const ShoeStructure = ({ items }) => {
  const dark = useSelector((state) => state.darkModeRedux);

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
        ring-neutral-400 
        sm:hover:ring-4
        ${dark ? 'shadow-none bg-neutral-200' : ''}`}
    >
      <img src={items.images[0]} alt={items.id} />

      <span className="absolute top-4 right-4 flex items-center">
        <p className="mr-1 text-slate-600">{items.likes}</p>
        <FaHeart className="text-redColor w-5 h-auto" />
      </span>

      {items.qt === 0 && (
        <p className="absolute top-1/3 left-1/4 text-redColor text-5xl rotate-45">
          Sold Out!
        </p>
      )}
      <section className="flex justify-between px-4 py-2">
        <h1 className="text-xl italic">{items.brand}</h1>
        <div className="flex items-center">{itemColors}</div>
      </section>
      <section className="flex justify-between px-4 pt-2 pb-3">
        <p className='text-white bg-neutral-800 px-3 rounded-md'>$ {items.price}</p>
        <p className="text-white bg-redColor px-3 rounded-xl">{items.off}% OFF</p>
      </section>
    </div>
  );
};

export default ShoeStructure;
