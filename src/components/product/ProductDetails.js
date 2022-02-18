import { Fragment } from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductDetails = ({items}) => {
    const {brand, category, description, likes, price, off} = items;

    return ( 
        <Fragment>
            <section className='sm:ml-4 mb-4 sm:mb-0'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>{brand}</h1>
                    <span className='flex items-center mr-20'>
                        <p className='mr-1 text-neutral-600'>{likes}</p>
                        <FaHeart className='text-xl text-redColor' />
                    </span>
                </div>
                <h2 className='mb-4 text-neutral-600'>{category}</h2>
                <p className='mb-2 font-bold'>Price: ${price}</p>
                <p className='mb-2 font-bold text-redColor'>OFF: {off}%</p>
                <span>
                    <p className='font-bold'>Details:</p>
                    <p className='px-4 text-justify'>" {description} "</p>
                </span>
            </section>
        </Fragment>
     );
}
 
export default ProductDetails;