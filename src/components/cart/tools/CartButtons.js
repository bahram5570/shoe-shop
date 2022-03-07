import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CartButtons = ({ buttonName, onBack }) => {
  return (
    <div className="w-full md:w-3/5 flex justify-end mt-4">
      <button
        type="button"
        onClick={() => onBack('back')}
        className="buttonsCart bg-redColor"
      >
        <FaAngleLeft className="mr-1" />
        Back
      </button>

      <button type="submit" className="buttonsCart bg-greenColor ml-6">
        {buttonName}
        {buttonName !== 'Order' && <FaAngleRight className="ml-1" />}
      </button>
    </div>
  );
};

export default CartButtons;
