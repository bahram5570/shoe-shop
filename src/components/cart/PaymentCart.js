import { useState } from 'react';
import CartButtons from './CartButtons';
import PaymentCartStructure from './PaymentCartStructure';
import {
  FaCreditCard,
  FaBitcoin,
  FaIdCard,
  FaMoneyBillAlt,
} from 'react-icons/fa';

const initialValue = localStorage.getItem('paymentCart')
  ? JSON.parse(localStorage.getItem('paymentCart'))
  : 'credit';

const PaymentCart = ({ onBack, onPayment }) => {
  const [check, setCheck] = useState(initialValue);

  const submitHandler = (e) => {
    e.preventDefault();
    onPayment(check);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center">
      <section>
        <PaymentCartStructure
          onRadio={(e) => setCheck(e)}
          name="credit"
          checkValue={check}
          text="Credit Card"
          icon={<FaCreditCard className="w-10 h-auto mr-2 text-orange-500" />}
        />

        <PaymentCartStructure
          onRadio={(e) => setCheck(e)}
          name="bitcoin"
          checkValue={check}
          text="Bitcoin"
          icon={<FaBitcoin className="w-10 h-auto mr-2 text-yellowColor" />}
        />

        <PaymentCartStructure
          onRadio={(e) => setCheck(e)}
          name="account"
          checkValue={check}
          text="Account Balance"
          icon={<FaIdCard className="w-10 h-auto mr-2 text-cyan-500" />}
        />
        
        <PaymentCartStructure
          onRadio={(e) => setCheck(e)}
          name="cash"
          checkValue={check}
          text="Cash (In place)"
          icon={
            <FaMoneyBillAlt className="w-10 h-auto mr-2 text-emerald-400" />
          }
        />
      </section>
      <CartButtons buttonName="Next" onBack={onBack} />
    </form>
  );
};

export default PaymentCart;
