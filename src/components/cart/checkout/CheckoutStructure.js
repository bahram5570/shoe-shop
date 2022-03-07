import { useDispatch, useSelector } from 'react-redux';
import { qtCart, removeFromCart } from '../../redux/slices/cartSlice';

import { FaTape, FaTrashAlt, FaShoppingBag } from 'react-icons/fa';

const CheckoutStructure = ({ items }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  const dispatch = useDispatch();

  const qtHandler = (type) => {
    if (type === 'increment' && items.qt < items.qtMax) {
      dispatch(qtCart({ ...items, qt: items.qt + 1 }));
    } else if (type === 'decrement' && items.qt > 1) {
      dispatch(qtCart({ ...items, qt: items.qt - 1 }));
    }
  };

  const salePrice =
    items.price * items.qt - (items.price * items.qt * items.off) / 100;

  return (
    <div
      className={`
        flex 
        relative
        md:justify-between
        items-center 
        mb-8 
        py-1
        h-40
        md:h-fit
        pr-2
        lg:pr-4
        shadow-[0_0_10px_#aaaaaa] 
        rounded-md
        ${dark && 'text-white'}
      `}
    >
      <img
        src={items.image}
        alt={items.name}
        className="h-full md:w-28 md:h-auto mr-2 md:mr-4 rounded"
      />

      <div className="md:flex md:items-center md:w-full">
        <div className="md:w-6/12 lg:w-4/12 xl:flex xl:justify-between xl:w-5/12">
          
          {/* Brand */}
          <h2 className="text-xl lg:text-2xl">{items.brand}</h2>

          {/* Color */}
          <span className="flex items-center lg:text-xl">
            <span
              style={{ background: items.color.code }}
              className={`
                w-5
                h-5
                my-1
                md:my-2
                mr-2
                rounded-xl
                border-2
                ${items.color.name === 'White' ? 'border-black' : 'border-white'}
                `}
            />
            <p>{items.color.name}</p>
          </span>

          {/* Size */}
          <span className="flex items-center lg:text-xl">
            <FaTape className="w-5 md:w-6 h-auto mr-2" />
            <p>{items.size}</p>
          </span>
        </div>

        {/* Quantity */}
        <div
          className="
            absolute 
            bottom-2 
            left-8 
            md:bottom-0 
            md:left-0 
            md:relative 
            flex 
            md:flex-col-reverse 
            lg:flex-row 
            justify-between 
            items-center 
            w-[100px] 
            md:w-fit 
            lg:min-w-[100px] 
            md:mx-4
            xl:ml-16"
        >
          {items.qt > 1 && (
            <button
              onClick={() => qtHandler('decrement')}
              className={`
                w-6 
                h-6 
                flex 
                justify-center 
                items-center 
                rounded 
                shadow-[0_0_6px_#555555] 
                active:scale-75 duration-75
                ${dark && 'bg-white'}
              `}
            >
              <p className="text-neutral-600 text-3xl">-</p>
            </button>
          )}

          {items.qt === 1 && (
            <button
              onClick={() => dispatch(removeFromCart(items))}
              className={`
                w-6 
                h-6 
                flex 
                justify-center 
                items-center 
                rounded 
                shadow-[0_0_6px_#555555] 
                p-1
                active:scale-75 duration-75
                ${dark && 'bg-white'}
              `}
            >
              <FaTrashAlt className="w-full h-full text-redColor" />
            </button>
          )}

          <p className={`
            text-xl 
            md:my-1
            ${dark && 'text-black md:text-white'}
          `}>{items.qt}</p>

          <button
            onClick={() => qtHandler('increment')}
            className={`
              w-6 
              h-6 
              flex 
              justify-center 
              items-center 
              rounded 
              shadow-[0_0_6px_#555555] 
              ${items.qt < items.qtMax && 'active:scale-75 duration-75'}
              ${dark && 'bg-white'}
            `}
          >
            <p className="text-neutral-600 text-3xl">+</p>
          </button>
        </div>

        <div className="md:w-4/12 lg:w-6/12 lg:flex">
          {/* OFF */}
          <span
            className="
              flex
              items-center
              md:justify-center
              text-sm 
              text-white
              lg:text-xl
              lg:w-6/12 
              my-1 
              md:my-0 
              md:mb-4 
              lg:mb-0"
          >
            <p className="bg-redColor px-3 rounded-2xl">{items.off}% OFF</p>
          </span>

          {/* Price */}
          <span
            className="
              flex
              items-center
              md:justify-center
              lg:text-2xl
              lg:w-6/12"
          >
            <FaShoppingBag className="w-4 md:w-5 h-auto mr-3 md:mr-2" />
            <p>{salePrice} $</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStructure;
