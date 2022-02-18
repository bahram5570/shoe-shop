import { Fragment } from 'react';

const Checkout = () => {
  return (
    <div className="p-4 shadow-[0_0_12px_#999999] rounded-xl sm:w-56 sm:min-w-[224px] h-fit">
      <Fragment>
        <h1 className="mb-2 text-xl font-bold text-center">Order Summery</h1>
        <p className="mb-3 italic text-center">date</p>
        <span className="flex justify-between mb-3">
          <p>Size:</p>
          <p>XX</p>
        </span>
        <span className="flex justify-between mb-3">
          <p>Color:</p>
          <p>XX</p>
        </span>
        <span className="flex justify-between mb-3">
          <p>Quantity:</p>
          <p>00</p>
        </span>
        <span className="flex justify-between pb-4 mb-3 border-b-2 border-neutral-400">
          <p>Original Price:</p>
          <p>00</p>
        </span>
        <span className="flex justify-between mb-3">
          <p>Sale Price:</p>
          <p>00</p>
        </span>
        <button className="w-full py-1 duration-100 bg-greenColor rounded-2xl text-neutral-50 active:scale-90">
          +Add To Cart
        </button>
      </Fragment>
    </div>
  );
};

export default Checkout;
