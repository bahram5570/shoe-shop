import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const AddToCart = ({ item }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  const salePrice =
    item.price * item.qt - (item.price * item.qt * item.off) / 100;

  const currnetCart = useSelector((state) => state.cartRedux);

  const dispatch = useDispatch();

  const [exist, setExist] = useState(false);

  useEffect(() => {
    const itemExistence = currnetCart.some((x) => x.id === item.id);

    if (itemExistence) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [item, currnetCart]);

  const navigate = useNavigate();

  const addToCartHandler = () => {
    if (exist) {
      navigate('/Cart')
    } else {
      dispatch(addToCart(item));
    }
  };

  return (
    <div
      className={`
        p-4 
        mt-12
        rounded-xl 
        sm:w-56 
        sm:min-w-[224px] 
        h-fit 
        relative
        ${dark ? 'shadow-[0_0_3px_#ffffff]' : 'shadow-[0_0_3px_#555555]'}
      `}
    >
      <h1 className="mb-6 text-xl font-bold text-center">Item Summery</h1>
      <span className="flex justify-between mb-3">
        <p>Size:</p>
        <p>{item.size}</p>
      </span>
      <span className="flex justify-between mb-3">
        <p>Color:</p>
        <p>{item.color && item.color.name}</p>
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
          duration-100           
          active:scale-90 
          outline-none
          disabled:hidden
          py-1
          bg-greenColor 
          text-neutral-50 
          ${!exist ? 'rounded-2xl' : 'rounded-lg'}          
        `}
      >
        {!exist ? '+Add To Cart' : 'Got To Checkout'}
      </button>
    </div>
  );
};

export default AddToCart;
