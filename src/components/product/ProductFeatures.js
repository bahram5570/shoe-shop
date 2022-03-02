import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProductFeatures = ({ items, onSelection }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  const { colors, size, qt } = items;

  const quantityList = [];

  for (let i = 1; i < qt; i++) {
    quantityList.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const [selection, setSelection] = useState({
    id: items.id,
    brand: items.brand,
    price: items.price,
    off: items.off,
    image: items.images[0],
    size: size[0],
    color: colors[0].name,
    qt: qt > 0 ? 1 : 0,
  });

  useEffect(() => {
    onSelection(selection);
  }, [onSelection, selection]);

  return (
    <div
      className="
        block
        sm:flex 
        flex-wrap 
        mb-4"
    >
      <section className="sm:mx-4 mt-3">
        <h2 className="ml-2 text-lg font-bold">Size:</h2>
        <div className="flex flex-wrap">
          {size.map((x) => (
            <div key={x} className="relative w-8 h-8 m-2">
              <label
                htmlFor={x}
                className="
                  absolute 
                  top-0 
                  bottom-0 
                  left-0 
                  right-0 
                  flex 
                  items-center 
                  justify-center 
                  cursor-pointer
                "
              >
                {x}
              </label>
              <input
                id={x}
                type="radio"
                name="size"
                value={x}
                defaultChecked={x === size[0]}
                onChange={(e) =>
                  setSelection({ ...selection, size: e.target.value })
                }
                className={`
                  w-full 
                  h-full 
                  duration-200 
                  border-2
                  rounded-md 
                  outline-none 
                  appearance-none 
                  ring-greenColor
                  checked:ring-4
                  checked:border-0
                  ${dark ? '' : 'border-neutral-800'}
                `}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="sm:mx-4 mt-3">
        <h2 className="ml-2 text-lg font-bold">Color:</h2>
        <div className="flex flex-wrap">
          {colors.map((x) => (
            <div key={x.name} className="relative w-8 h-8 m-2">
              <input
                id={x.name}
                type="radio"
                name="colors"
                value={x}
                defaultChecked={x.name === colors[0].name}
                onChange={() => setSelection({ ...selection, color: x.name })}
                style={{ background: x.code }}
                className="
                  w-full 
                  h-full 
                  border-2 
                  rounded-full 
                  outline-none 
                  appearance-none 
                  border-neutral-400 
                  checked:ring-4 
                  ring-greenColor 
                  ring-offset-2 
                  cursor-pointer 
                  duration-200"
              />
            </div>
          ))}
        </div>
      </section>

      {qt > 0 && (
        <section className="sm:mx-4 mt-3">
          <h2 className="ml-2 text-lg font-bold mb-2">Quantity:</h2>
          <select
            onChange={(e) => setSelection({ ...selection, qt: e.target.value })}
            className={`
              pl-2 
              pr-10 
              py-1 
              rounded-md 
              outline-none 
              sm:cursor-pointer 
              ml-2 border-2 
              border-neutral-600
              ${dark ? 'bg-neutral-200 text-black border-none' : ''}
            `}
          >
            {quantityList}
          </select>
        </section>
      )}

      {qt === 0 && (
        <section>
          <h2 className="ml-2 text-xl text-redColor font-bold mb-2">
            Sold Out!
          </h2>
        </section>
      )}
    </div>
  );
};

export default ProductFeatures;
