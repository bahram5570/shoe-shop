import { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { liking } from '../redux/slices/likeSlice';
import { FaHeart, FaRegHeart, FaSortDown } from 'react-icons/fa';

export const useLikes = (dataLikes, userLikes, id) => {
  const list = [];
  userLikes.forEach((x) => list.push(x.split('_')[1]));
  const newList = list.filter((x) => x === id);
  return dataLikes + newList.length;
};

const ProductDetails = ({ items }) => {
  const { brand, category, gender, name, description, likes, price, off } =
    items;

  const dark = useSelector((state) => state.darkModeRedux);
  const userStatus = useSelector((state) => state.signinRedux).loggedUser;
  const currentLikes = useSelector((state) => state.likesRedux);

  const likeId = userStatus && userStatus.Username + '_' + items.id;
  const hasLike = userStatus ? currentLikes.includes(likeId) : false;

  const dispatch = useDispatch();

  const [loginFirst, setLoginFirst] = useState(false);

  useEffect(() => {
    if (loginFirst) {
      setTimeout(() => setLoginFirst(false), 2000);
    }
  }, [loginFirst]);

  const likeHandler = () => {
    if (userStatus) {
      dispatch(liking(likeId));
    } else {
      setLoginFirst(true);
    }
  };

  return (
    <Fragment>
      <section className="sm:mx-8">
        <div className="flex">
          <h1 className="text-4xl font-bold">{brand}</h1>
          <span className="relative flex items-center ml-20">
            <p className={`mr-2 text-xl ${dark ? '' : 'text-neutral-600'}`}>
              {useLikes(likes, currentLikes, items.id)}
            </p>

            {hasLike && (
              <FaHeart
                onClick={() => likeHandler()}
                className="text-xl text-redColor w-5 h-auto cursor-pointer active:scale-75 duration-100"
              />
            )}

            {!hasLike && (
              <FaRegHeart
                onClick={() => likeHandler()}
                className="text-xl text-redColor w-5 h-auto cursor-pointer active:scale-75 duration-100"
              />
            )}

            {/* Like error */}
            {loginFirst && (
              <p className="absolute -top-10 -left-10 w-max px-4 py-1 rounded-md bg-cyan-500 text-white">
                Login please!
                <FaSortDown className="absolute top-1.5 left-10 w-10 h-auto text-cyan-500" />
              </p>
            )}
          </span>
        </div>

        <h2 className="text-xl mt-2">{name}</h2>

        <h2 className={`mt-2 mb-6 ${!dark && 'text-neutral-700'}`}>
          <span className="text-2xl mr-2">{category}</span>
          <span>"{gender.join(', ')}"</span>
        </h2>

        <p className="mb-2 text-xl font-bold">Price: ${price}</p>
        {off > 0 && (
          <p className="mb-2 text-xl font-bold text-redColor">OFF: {off}%</p>
        )}

        <span>
          <p className="font-bold">Details:</p>
          <p className="px-4 text-justify">" {description} "</p>
        </span>
      </section>
    </Fragment>
  );
};

export default ProductDetails;
