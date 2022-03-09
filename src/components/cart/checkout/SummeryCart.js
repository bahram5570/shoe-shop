import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from '../../redux/slices/cartSlice';
import { pricing } from '../tools/pricing';
import { currentDate } from '../tools/currentDate';

const SummeryCart = ({ items, onCheckout }) => {
  const dark = useSelector((state) => state.darkModeRedux);
  const dispatch = useDispatch();

  const {totalItems, originalPrice, discount, salePrice} = pricing(items);

  const currentTime = currentDate();

  return (
    <div
      className={`
        p-4 
        rounded-xl 
        top-4
        sticky
        ${
          dark
            ? 'shadow-[0_0_12px_#ffffff] text-white'
            : 'shadow-[0_0_12px_#555555]'
        }
      `}
    >
      <h1 className="mb-4 text-2xl font-bold text-center">Order Summery</h1>
      <p className="italic text-center">{currentTime}</p>

      <span className="flex justify-between my-5 text-xl">
        <p>Total Items:</p>
        <p>{totalItems}</p>
      </span>

      <span className="flex justify-between my-5 text-xl">
        <p>Original Price:</p>
        <p>${originalPrice.toFixed(2)}</p>
      </span>

      <span className="flex justify-between my-5 text-xl">
        <p>Discount:</p>
        <p>${discount.toFixed(2)}</p>
      </span>

      <span className="flex justify-between my-5 text-xl pt-2 border-t-2 border-neutral-400">
        <p>Sale Price:</p>
        <p>${salePrice.toFixed(2)}</p>
      </span>

      <button
        onClick={() => onCheckout()}
        className={`
          w-full
          py-1 
          rounded-2xl
          outline-none
          text-lg
          bg-greenColor
          text-neutral-50
        `}
      >
        Checkout
      </button>

      <button
        onClick={() => dispatch(clearCart())}
        className={`
          w-full
          mt-4
          py-1 
          rounded-2xl
          outline-none
          text-lg
          bg-redColor
          text-neutral-50
        `}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default SummeryCart;
