import { useSelector } from 'react-redux';

const SummeryCart = ({ items }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  let totalItems = 0;
  let originalPrice = 0;
  let discount = 0;
  let salePrice = 0;

  items.forEach((e) => {
    totalItems = totalItems + e.qt;
    originalPrice = originalPrice + e.qt * e.price;
    discount = discount + (e.qt * e.price * e.off) / 100;
    salePrice = salePrice + e.qt * e.price - (e.qt * e.price * e.off) / 100;
  });

  // Time
  const time = new Date().toString().split(' ');
  const day = time[2][0] === '0' ? time[2][1] : time[2];
  const currentTime = time[0] + ', ' + day + ' ' + time[1] + ' ' + time[3];

  return (
    <div
      className={`
        p-4 
        rounded-xl 
        top-4
        sticky
        ${
          dark
            ? 'shadow-[0_0_12px_#ffffff] text-white'
            : 'shadow-[0_0_12px_#555555]'
        }
      `}
    >
      <h1 className="mb-4 text-2xl font-bold text-center">OrderSummery</h1>
      <p className="italic text-center">{currentTime}</p>

      <span className="flex justify-between my-5 text-xl">
        <p>Total Items:</p>
        <p>{totalItems}</p>
      </span>

      <span className="flex justify-between my-5 text-xl">
        <p>Original Price:</p>
        <p>{originalPrice.toFixed(2)} $</p>
      </span>

      <span className="flex justify-between my-5 text-xl">
        <p>Discount:</p>
        <p>{discount.toFixed(2)} $</p>
      </span>

      <span className="flex justify-between my-5 text-xl pt-2 border-t-2 border-neutral-400">
        <p>Sale Price:</p>
        <p>{salePrice.toFixed(2)} $</p>
      </span>

      <button
        className={`
            w-full
            py-1 
            rounded-2xl
            outline-none
            text-lg
            bg-greenColor
            text-neutral-50
            `}
      >
        Checkout
      </button>
    </div>
  );
};

export default SummeryCart;
