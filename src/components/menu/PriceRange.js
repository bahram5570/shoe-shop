import { useEffect, useState } from 'react';

const PriceRange = (props) => {
  const { minPrice, maxPrice } = props.items;

  const filterPrices = localStorage.getItem('price')
    ? JSON.parse(localStorage.getItem('price'))
    : { min: minPrice, max: maxPrice };

  const [priceValue, setPriceValue] = useState({
    min: filterPrices.min,
    max: filterPrices.max,
  });

  useEffect(() => {
    props.onPrice(priceValue);
  }, [priceValue, props]);

  const priceHandler = (e) => {
    setPriceValue({ ...priceValue, [e.target.name]: parseInt(e.target.value) });
  };

  const linePosition = (number, type) => {
    const totalNumber = maxPrice - minPrice;
    const currentNumber = maxPrice - number;
    const percent = (currentNumber * 100) / totalNumber - 100;

    if (type === 'maxLength') {
      return -parseInt(percent) + '%';
    } else if (type === 'minLength') {
      return parseInt(percent + 100) + '%';
    }

    const result =
      type === 'min'
        ? -parseInt((percent * 200) / 100)
        : parseInt((percent * 200) / 100) + 200;

    return result + 'px';
  };

  return (
    <div className="pb-7 px-2">
      <div className="flex justify-between pb-2">
        <p>${priceValue.min}</p>
        <p>${priceValue.max}</p>
      </div>
      <div className="relative">
        <span
          className="
            absolute 
            top-2 
            h-1 
            left-0 
            right-0 
            bg-neutral-300 
            rounded-xl 
            pointer-events-none"
        />
        <div
          style={{
            left: linePosition(priceValue.min, 'min'),
            right: linePosition(priceValue.max, 'max'),
          }}
          className={`absolute top-2 h-1 bg-cyan-300`}
        >
          <span className="w-5 h-5 bg-blue-800 absolute -left-1 -top-2 rounded-xl" />
          <span className="w-5 h-5 bg-blue-800 absolute -right-1 -top-2 rounded-xl" />
        </div>
        <input
          type="range"
          style={{ width: linePosition(priceValue.max, 'maxLength') }}
          defaultValue={priceValue.min}
          min={minPrice}
          max={priceValue.max}
          name="min"
          onChange={priceHandler}
        />
        <input
          type="range"
          style={{ right: 0, width: linePosition(priceValue.min, 'minLength') }}
          defaultValue={priceValue.max}
          min={priceValue.min}
          max={maxPrice}
          name="max"
          onChange={priceHandler}
        />
      </div>
    </div>
  );
};

export default PriceRange;
