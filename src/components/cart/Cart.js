import { useSelector } from 'react-redux';
import OrderStructure from './OrderStructure';
import SummeryCart from './SummeryCart';

const Cart = () => {
  const currentCart = useSelector((state) => state.cartRedux);

  return (
    <div className="md:flex md:justify-between">
      <section className="w-full md:mr-8">
        {currentCart.map((x) => (
          <OrderStructure key={x.id + x.color + x.size} items={x} />
        ))}
      </section>

      <section className="min-w-[270px] lg:min-w-[300px]">
        <SummeryCart items={currentCart} />
      </section>
    </div>
  );
};

export default Cart;
