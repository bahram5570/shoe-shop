import { FaPalette, FaTape, FaTag } from 'react-icons/fa';

const OrderProducts = ({ no, items }) => {
  return (
    <div
      className="
        lg:text-lg 
        mt-4 
        p-2 
        shadow-[0_0_5px_#666666] 
        md:flex 
        md:justify-between 
        md:items-center"
    >
      <p>
        {no}. {items.brand}
      </p>

      <span className="flex items-center my-2 md:my-0">
        <FaPalette className="mr-2" />
        <p>{items.color.name}</p>
      </span>

      <span className="flex items-center my-2 md:my-0">
        <FaTape className="mr-2" />
        <p>{items.size}</p>
      </span>

      <span className="flex items-center my-2 md:my-0">
        <p className="mr-2">Quantity:</p>
        <p>{items.qt}</p>
      </span>

      <span className="flex items-center my-2 md:my-0">
        <FaTag className="mr-2" />
        <p>${items.price}</p>
      </span>
    </div>
  );
};

export default OrderProducts;
