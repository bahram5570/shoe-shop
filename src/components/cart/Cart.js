import {Fragment, useState, useEffect} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigator from './Navigator';
import OrderStructure from './OrderStructure';
import SummeryCart from './SummeryCart';
import AddressCart from './AddressCart';
import PaymentCart from './PaymentCart';
import OrderCart from './OrderCart';

const initialShopStatus = localStorage.getItem('shopStatus') ? JSON.parse(localStorage.getItem('shopStatus')) : 1;

const Cart = () => {
  const [shopStatus, setShopStatus] = useState(initialShopStatus);

  useEffect( () => {
    localStorage.setItem('shopStatus', JSON.stringify(shopStatus))
  }, [shopStatus]);


  const currentCart = useSelector((state) => state.cartRedux);
  const navigate = useNavigate();

  // Status 2
  const checkoutHandler = () => {
    if (localStorage.getItem('currentUser')) {
      setShopStatus(2)
    } else {
      navigate('/login?status=checkout')
    }
  };

  const [searchParams] = useSearchParams();

  useEffect( () => {
    if (searchParams.get('status') === 'checkedin' && shopStatus === 1) {
      setShopStatus(2)
    }
  }, [searchParams, shopStatus]);
  // *****


  // Status 3
  const addressHandler = (e) => {console.log(e)}  ////////////////////////////////////////
  // *****


  return (
    <Fragment>
      <Navigator shopStatus={shopStatus} />

      {shopStatus === 1 &&<div className="md:flex md:justify-between">
        <section className="w-full md:mr-8">
          {currentCart.map((x) => (
            <OrderStructure key={x.id + x.color + x.size} items={x} />
          ))}
        </section>

        <section className="min-w-[270px] lg:min-w-[300px]">
          <SummeryCart items={currentCart} onCheckout={checkoutHandler} />
        </section>
      </div>}

      {shopStatus === 2 && <AddressCart onAddress={addressHandler} />}

      {shopStatus === 3 && <PaymentCart />}

      {shopStatus === 4 && <OrderCart />}
    </Fragment>
  );
};

export default Cart;
