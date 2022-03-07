import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';

const PaymentCartStructure = ({ name, text, icon, onRadio, checkValue }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  return (
    <label
      htmlFor={name}
      className={`
        relative 
        flex 
        items-center 
        my-8
        text-2xl
        ${dark && 'text-white'}
       `}
    >
      <FaCheck className={`mr-2 ${checkValue !== name && 'opacity-0'}`} />

      {icon}

      {text}

      <input
        id={name}
        type="radio"
        name="payment"
        value={name}
        onChange={(e) => onRadio(e.target.value)}
        className="
          appearance-none
          outline-none
          absolute
          top-0
          left-0
          right-0
          bottom-0
          cursor-pointer"
      />
    </label>
  );
};

export default PaymentCartStructure;
