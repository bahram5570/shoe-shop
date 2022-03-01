import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { data } from '../data/data';
import SlideShow from './SlideShow';
import ProductDetails from './ProductDetails';
import ProductFeatures from './ProductFeatures';
import AddToCart from './AddToCart';
import { useState } from 'react';

const Product = () => {
  const dark = useSelector((state) => state.darkModeRedux);

  const params = useParams();
  const item = data[params.id];

  const [selectedProduct, setSelectedProduct] = useState({});

  const selectionHandler = (e) => {
    setSelectedProduct(e);
  };

  return (
    <div className={`block sm:flex ${dark ? 'text-white' : ''}`}>
      <section className="block lg:flex">
        <div className="min-w-[300px] sm:max-w-[400px] w-full mb-4 lg:mb-0">
          <SlideShow items={item.images} />
        </div>
        <div className="min-w-6/12">
          <ProductDetails items={item} />
        </div>
      </section>

      <section className="sm:flex">
        <ProductFeatures items={item} onSelection={selectionHandler} />
        <AddToCart item={selectedProduct} />
      </section>
    </div>
  );
};

export default Product;
