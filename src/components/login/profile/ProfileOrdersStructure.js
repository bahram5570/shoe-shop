import { FaPalette, FaTape, FaTag } from 'react-icons/fa';

const ProfileOrdersStructure = ({ items }) => {
  let keyGenerator = 1;

  return items.map((element) => (
    <div
      key={keyGenerator++}
      className="shadow-[0_0_5px_#888888] p-4 mb-10 rounded-md sm:rounded-lg"
    >
      <div className="sm:flex sm:justify-between text-lg sm:text-xl mb-4 sm:mb-6">
        <h2 className="mb-2 sm:mb-0 italic font-bold">{element.date}</h2>
        <h2 className="font-bold">Total Price: {element.totalPrice} $</h2>
      </div>

      {element.products.map((x) => (
        <div
          key={keyGenerator++}
          className="flex items-center mt-4 pr-2 border-2 border-neutral-300 rounded"
        >
          <img
            src={x.image}
            alt={x.brand}
            className="w-1/2 sm:w-14 h-auto rounded-md mr-4"
          />

          <div className="sm:flex sm:justify-between w-full py-1 sm:py-0">
            <h3 className="font-bold">{x.brand}</h3>

            <span className="flex items-center my-1 sm:my-0">
              <span
                style={{ background: x.color.code }}
                className={`
                  w-3 
                  h-3 
                  rounded-md 
                  mr-1
                  ${x.color.name === 'White' && 'ring-1 ring-neutral-600'}
                `}
              />
              <p>{x.color.name}</p>
            </span>

            <span className="flex items-center my-1 sm:my-0">
              <FaTape className="mr-1" />
              <p>{x.size}</p>
            </span>

            <span className="flex items-center my-1 sm:my-0">
              <p>Qt: {x.qt}</p>
            </span>

            <span className="flex items-center my-1 sm:my-0">
              <FaTag className="mr-1" />
              <p>{x.price} $</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  ));
};

export default ProfileOrdersStructure;
