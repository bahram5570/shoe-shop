import { FaRulerHorizontal, FaTag } from 'react-icons/fa';

const OrderProducts = ({ no, items }) => {
  return (
    <div
      className="
        lg:text-lg 
        mt-4 
        p-2 
        border-b-2
        border-neutral-500
        flex 
        sm:items-center"
    >
      <section className="mr-6 w-6/12 max-w-[150px] sm:w-20">
        <img src={items.image} alt={items.brand} className="rounded-md" />
      </section>

      <section className="sm:flex sm:w-full sm:justify-between sm:items-center">
        <p className="sm:w-3/12">
          {no}. {items.brand}
        </p>

        <div className="flex items-center sm:w-2/12">
          <span
            style={{ background: items.color.code }}
            className={`
                w-5
                h-5
                my-1
                md:my-2
                mr-2
                rounded-xl
                border-2
                ${
                  items.color.name === 'White' ? 'border-black' : 'border-white'
                }
              `}
          />
          <p>{items.color.name}</p>
        </div>

        <span className="flex items-center my-2 md:my-0 sm:w-2/12">
          <FaRulerHorizontal className="mr-2" />
          <p>{items.size}</p>
        </span>

        <span className="flex items-center my-2 md:my-0 sm:w-3/12">
          <p className="mr-2">Quantity:</p>
          <p>{items.qt}</p>
        </span>

        <span className="flex items-center my-2 md:my-0">
          <FaTag className="mr-2" />
          <p>${items.price}</p>
        </span>
      </section>
    </div>
  );
};

export default OrderProducts;
