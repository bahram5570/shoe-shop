import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';

const AddToCart = ({ item }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  const salePrice =
    item.price * item.qt - (item.price * item.qt * item.off) / 100;

  const currnetCart = useSelector((state) => state.cartRedux);

  const dispatch = useDispatch();

  const [exist, setExist] = useState(false);

  useEffect(() => {
    const itemExistence = currnetCart.some(
      (x) =>
        x.id === item.id &&
        x.size.toString() === item.size.toString() &&
        x.color === item.color
    );

    if (itemExistence) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [item, currnetCart]);

  const addToCartHandler = () => {
    if (exist) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(addToCart(item));
    }
  };

  const time = new Date().toString().split(' ');
  const day = time[2][0] === '0' ? time[2][1] : time[2];
  const currentTime = time[0] + ', ' + day + ' ' + time[1] + ' ' + time[3];

  return (
    <div
      className={`
      p-4 
      rounded-xl 
      sm:w-56 
      sm:min-w-[224px] 
      h-fit 
      relative
      ${dark ? 'shadow-[0_0_12px_#ffffff]' : 'shadow-[0_0_12px_#555555]'}`}
    >
      <h1 className="mb-2 text-xl font-bold text-center">Order Summery</h1>
      <p className="mb-3 italic text-center">{currentTime}</p>
      <span className="flex justify-between mb-3">
        <p>Size:</p>
        <p>{item.size}</p>
      </span>
      <span className="flex justify-between mb-3">
        <p>Color:</p>
        <p>{item.color}</p>
      </span>
      {item.qt > 0 && (
        <span className="flex justify-between mb-3">
          <p>Quantity:</p>
          <p>{item.qt}</p>
        </span>
      )}
      <span className="flex justify-between mb-3">
        <p>OFF:</p>
        <p>{item.off}%</p>
      </span>
      <span className="flex justify-between mb-3">
        <p>Original Price:</p>
        <p>$ {item.price}</p>
      </span>
      {item.qt > 0 && (
        <span className="flex justify-between mb-3 pt-2 border-t-2 border-neutral-400">
          <p>Sale Price:</p>
          <p>$ {salePrice}</p>
        </span>
      )}
      <button
        onClick={() => addToCartHandler()}
        disabled={item.qt === 0}
        className={`
          w-full 
          py-1 
          duration-100 
          rounded-2xl
          active:scale-90 
          outline-none
          disabled:hidden
          ${!exist ? 'bg-greenColor text-neutral-50' : ''}
          ${exist ? 'ring-2 ring-redColor text-redColor' : ''}
        `}
      >
        {!exist ? '+Add To Cart' : 'Remove From Cart'}
      </button>
    </div>
  );
};

export default AddToCart;
