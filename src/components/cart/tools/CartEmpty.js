import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const CartEmpty = () => {
  const dark = useSelector((state) => state.darkModeRedux);

  return (
    <section>
      <div className="flex flex-col items-center mt-4">
        <span
          className={`
            flex 
            items-center  
            font-bold 
            mb-6 
            animate-nothingFoundAnim
            ${dark ? 'text-white' : 'text-neutral-800'}
          `}
        >
          <FaShoppingCart className="text-7xl mx-4" />
        </span>
        <p className={`text-3xl ${dark ? 'text-white' : ''}`}>Cart Is Empty!</p>
      </div>
    </section>
  );
};

export default CartEmpty;
