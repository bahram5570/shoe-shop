import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import SlideShow from './SlideShow';
import ProductDetails from './ProductDetails';
import ProductFeatures from './ProductFeatures';
import AddToCart from './AddToCart';

const Product = () => {
  const params = useParams();
  const item = data.products_datails[params.id];

  return (
    <div className="block sm:flex">
      <section className="block lg:flex">
        <div className="min-w-[300px] sm:max-w-[400px] w-full mb-4 lg:mb-0">
          <SlideShow items={item.images} />
        </div>
        <div className="min-w-6/12">
          <ProductDetails items={item} />
        </div>
      </section>

      <section className="sm:flex">
        <ProductFeatures items={item} />
        <AddToCart />
      </section>
    </div>
  );
};

export default Product;
