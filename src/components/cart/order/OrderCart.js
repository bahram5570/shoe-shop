import { useSelector } from 'react-redux';
import CartButtons from '../tools/CartButtons';
import OrderProfile from './OrderProfile';
import OrderProducts from './OrderProducts';
import { pricing } from '../tools/pricing';
import { currentDate } from '../tools/currentDate';
import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCity,
  FaMapMarkerAlt,
  FaAddressBook,
  FaDollarSign,
} from 'react-icons/fa';

const OrderCart = ({ onBack, onOrder }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  const addressCart = JSON.parse(localStorage.getItem('addressCart'));
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const products = JSON.parse(localStorage.getItem('cart'));
  const paymentCart = JSON.parse(localStorage.getItem('paymentCart'));

  const { salePrice } = pricing(products);
  const currentTime = currentDate();
  let no = 1;

  const currentOrder = {
    products: products,
    totalPrice: salePrice.toFixed(2),
    date: currentTime,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onOrder(currentOrder);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`md:mx-20 ${dark && 'text-white'}`}
    >
      <section className="mb-8">
        <OrderProfile text={addressCart.name} icon={<FaUserAlt />} />

        <OrderProfile
          text={`${currentUser.Phone}, ${addressCart.phone}`}
          icon={<FaPhoneAlt />}
        />

        <OrderProfile text={currentUser.Email} icon={<FaEnvelope />} />
        <OrderProfile text={addressCart.city} icon={<FaCity />} />
        <OrderProfile text={addressCart.address} icon={<FaMapMarkerAlt />} />
        <OrderProfile text={addressCart.postal} icon={<FaAddressBook />} />
        <OrderProfile text={paymentCart} icon={<FaDollarSign />} />
      </section>

      <section>
        {products.map((x) => (
          <OrderProducts key={x.id} no={no++} items={x} />
        ))}
      </section>

      <section className="flex justify-end my-4 text-xl md:text-2xl">
        <h2>Total Price: ${salePrice.toFixed(2)}</h2>
      </section>

      <section className="flex justify-end">
        <CartButtons buttonName="Order" onBack={onBack} />
      </section>
    </form>
  );
};

export default OrderCart;
