import CheckoutStructure from './CheckoutStructure';
import SummeryCart from './SummeryCart';

const Checkout = ({ currentCart, onCheckout }) => {
  return (
    <div className="md:flex md:justify-between">
      <section className="w-full md:mr-8">
        {currentCart.map((x) => (
          <CheckoutStructure key={x.id + x.color + x.size} items={x} />
        ))}
      </section>

      <section className="min-w-[270px] lg:min-w-[300px]">
        <SummeryCart items={currentCart} onCheckout={onCheckout} />
      </section>
    </div>
  );
};

export default Checkout;
