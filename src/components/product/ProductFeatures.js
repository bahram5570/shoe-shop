const ProductFeatures = ({ items }) => {
  const { colors, size, qt } = items;

  const quantityList = [];

  for (let i = 1; i < qt; i++) {
    quantityList.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="block sm:w-24 min-w-[96px] md:min-w-[160px] sm:mx-2 md:mx-6 mb-8 sm:mb-0">
      <section>
        <h2 className="ml-2 text-lg font-bold">Size:</h2>
        <div className="flex flex-wrap">
          {size.map((x) => (
            <div key={x} className="relative w-8 h-8 m-2">
              <label
                htmlFor={x}
                className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center cursor-pointer"
              >
                {x}
              </label>
              <input
                id={x}
                type="radio"
                name="size"
                value={x}
                defaultChecked={x === size[0]}
                className="
                  w-full 
                  h-full 
                  duration-200 
                  border-2
                  rounded-md 
                  outline-none 
                  appearance-none 
                  border-neutral-800 
                  ring-greenColor
                  checked:ring-4
                  checked:border-0"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="my-4">
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

      <section>
        <h2 className="ml-2 text-lg font-bold mb-2">Quantity:</h2>
        <select className="pl-2 pr-10 py-1 rounded-md outline-none sm:cursor-pointer ml-2 border-2 border-neutral-600">
          {quantityList}
        </select>
      </section>
    </div>
  );
};

export default ProductFeatures;