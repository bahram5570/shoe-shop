import { Fragment, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { userUpdate } from '../redux/slices/signinSlice';
import Navigator from './tools/Navigator';
import Checkout from './checkout/Checkout';
import AddressCart from './address/AddressCart';
import PaymentCart from './payment/PaymentCart';
import OrderCart from './order/OrderCart';
import OrderApply from './order/OrderApply';
import CartEmpty from './tools/CartEmpty';

const initialShopStatus = localStorage.getItem('shopStatus')
  ? JSON.parse(localStorage.getItem('shopStatus'))
  : 1;

const Cart = () => {
  const [shopStatus, setShopStatus] = useState(initialShopStatus);

  useEffect(() => {
    localStorage.setItem('shopStatus', JSON.stringify(shopStatus));
  }, [shopStatus]);

  const currentCart = useSelector((state) => state.cartRedux);

  const navigate = useNavigate();

  // Status 1
  const checkoutHandler = () => {
    if (localStorage.getItem('currentUser')) {
      setShopStatus(2);
    } else {
      navigate('/login?status=checkout');
    }
  };

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('status') === 'checkedin' && shopStatus === 1) {
      setShopStatus(2);
      navigate('/Cart');
    }
  }, [searchParams, shopStatus, navigate]);

  // Status 2
  const addressHandler = (e) => {
    if (e === 'back') {
      setShopStatus(1);
    } else {
      localStorage.setItem('addressCart', JSON.stringify(e));
      setShopStatus(3);
    }
  };

  // Status 3
  const paymentHandler = (e) => {
    if (e === 'back') {
      setShopStatus(2);
    } else {
      localStorage.setItem('paymentCart', JSON.stringify(e));
      setShopStatus(4);
    }
  };

  // Status 4
  const ordertHandler = (e) => {
    if (e === 'back') {
      setShopStatus(3);
    } else {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      const userName = 'user_' + user.Username;
      const orders = [...user.orders, e];

      setShopStatus(5);

      localStorage.setItem(userName, JSON.stringify({ ...user, orders }));
      localStorage.setItem('currentUser', JSON.stringify({ ...user, orders }));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (shopStatus === 5) {
      setTimeout(() => {
        localStorage.removeItem('shopStatus');
        localStorage.removeItem('addressCart');
        localStorage.removeItem('paymentCart');
        localStorage.removeItem('cart');

        dispatch(clearCart());
        dispatch(userUpdate());
        navigate('/Shop');
      }, 3000);
    }
  }, [shopStatus, dispatch, navigate]);

  if (currentCart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <Fragment>
      <Navigator shopStatus={shopStatus} />

      {shopStatus === 1 && (
        <Checkout currentCart={currentCart} onCheckout={checkoutHandler} />
      )}

      {shopStatus === 2 && (
        <AddressCart onAddress={addressHandler} onBack={addressHandler} />
      )}

      {shopStatus === 3 && (
        <PaymentCart onPayment={paymentHandler} onBack={paymentHandler} />
      )}

      {shopStatus === 4 && (
        <OrderCart onOrder={ordertHandler} onBack={ordertHandler} />
      )}

      {shopStatus === 5 && <OrderApply />}
    </Fragment>
  );
};

export default Cart;
