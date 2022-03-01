import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const AddToCart = ({ item }) => {
  const dark = useSelector((state) => state.darkModeRedux);
  const dispatch = useDispatch();

  const salePrice =
    item.price * item.qt - (item.price * item.qt * item.off) / 100;

  const addToCartHandler = () => {
    dispatch(addToCart(item));
  };

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
      <p className="mb-3 italic text-center">date</p>
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
        className="
          w-full 
          py-1 
          duration-100 
          bg-greenColor 
          rounded-2xl 
          text-neutral-50 
          active:scale-90 
          outline-none
          disabled:hidden"
      >
        +Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
