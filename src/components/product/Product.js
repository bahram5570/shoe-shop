import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import SlideShow from './SlideShow';
import ProductDetails from './ProductDetails';

const Product = () => {
  const params = useParams();
  const item = data.products_datails[params.id];

  return (
    <div className="flex mx-auto ">
      <section className="w-4/12">
        <SlideShow items={item.images} />
      </section>

      <section className="w-6/12 p-4">
          <ProductDetails items={item} />  
      </section>

      <section className="">
          Checkout
      </section>
    </div>
  );
};

export default Product;
