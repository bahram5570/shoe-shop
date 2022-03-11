import { useSelector } from 'react-redux';
import { FaRegSmile } from 'react-icons/fa';

const OrderApply = () => {
  const dark = useSelector((state) => state.darkModeRedux);

  return (
    <div
      className={`
        flex 
        flex-col 
        items-center 
        text-xl 
        md:text-4xl
        ${dark && 'text-white'}
      `}
    >
      <FaRegSmile className="w-16 md:w-28 h-auto" />
      <h2 className="my-6">Thanks for your purchase</h2>
      <p>Have a nice day.</p>
    </div>
  );
};

export default OrderApply;
