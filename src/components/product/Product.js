import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { data } from '../data/data';
import SlideShow from './SlideShow';
import ProductDetails from './ProductDetails';
import ProductFeatures from './ProductFeatures';
import AddToCart from './AddToCart';
import PageNotFound from '../main/PageNotFound';
import { FaReply } from 'react-icons/fa';

const Product = () => {
  const dark = useSelector((state) => state.darkModeRedux);

  const [selectedProduct, setSelectedProduct] = useState({});

  const navigate = useNavigate();

  const params = useParams();
  const item = data[params.id];

  if (item === undefined) {
    return <PageNotFound />;
  }

  return (
    <div
      className={`block sm:flex justify-between ${dark ? 'text-white' : ''}`}
    >
      <section className="block lg:flex">
        <div className="sm:w-9/12 sm:min-w-[350px]">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center mb-4 mr-2 text-lg text-cyan-400 outline-none"
          >
            <FaReply className="mr-2" />
            Back
          </button>
          <SlideShow items={item.images} />
        </div>
        <div>
          <ProductFeatures
            items={item}
            onSelection={(e) => setSelectedProduct(e)}
          />
          <ProductDetails items={item} />
        </div>
      </section>

      <section>
        <AddToCart item={selectedProduct} />
        {item.qt === 0 && (
          <h2 className="text-5xl text-redColor font-bold mt-10 text-center">
            Sold Out!
          </h2>
        )}
      </section>
    </div>
  );
};

export default Product;
