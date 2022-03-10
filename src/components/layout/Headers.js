import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DarkMode from './DarkMode';
import { showHeader } from '../redux/slices/headerSlice';
import {
  FaHome,
  FaShoePrints,
  FaBars,
  FaShoppingBag,
  FaSignInAlt,
  FaShoppingCart,
  FaUserCircle,
} from 'react-icons/fa';

const Headers = () => {
  const dispatch = useDispatch();

  const dark = useSelector((state) => state.darkModeRedux);

  const showMenu = useSelector((state) => state.headerRedux).showHeader;

  const userStatus = useSelector((state) => state.signinRedux).loggedUser;
  const cartQt = useSelector((state) => state.cartRedux).length;

  return (
    <header
      className="
      fixed 
      sm:absolute 
      top-0 
      w-screen 
      py-1 
      px-4 
      text-white 
      bg-zinc-800 
      z-40"
    >
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <h1 className="flex mr-6 text-2xl sm:text-4xl italic font-headerFont text-yellowColor pointer-events-none">
            <FaShoePrints className="w-auto h-8 sm:h-10 mr-2" />
            Shoe Shop
          </h1>

          <DarkMode dark={dark} />
        </div>

        <FaBars
          onClick={() => dispatch(showHeader())}
          className={`z-10 w-auto h-8 cursor-pointer sm:hidden duration-300 ${
            showMenu && 'rotate-90'
          }`}
        />

        <ul
          className={`
            absolute 
            sm:relative 
            top-0 
            ${showMenu ? 'right-0' : '-right-20'}
            sm:right-0
            flex 
            flex-col 
            sm:flex-row 
            sm:items-center 
            h-screen 
            sm:h-fit
            duration-300
            w-20 
            sm:w-fit 
            pt-14 
            sm:pt-0 
            bg-opacity-90 
            sm:bg-opacity-100 
            bg-zinc-800 
          `}
        >
          <li className="">
            <NavLink
              to="/Home"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <span className="flex flex-col items-center">
                <FaHome className="w-6 h-auto" />
                Home
              </span>
            </NavLink>
          </li>

          <li className="">
            <NavLink
              end
              to="/Shop"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <span className="flex flex-col items-center">
                <FaShoppingBag className="w-6 h-auto pt-2 sm:pt-0" />
                Shop
              </span>
            </NavLink>
          </li>

          <li className="relative flex sm:mx-2">
            <NavLink
              to="/Cart"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <span className="flex flex-col items-center">
                <FaShoppingCart className="w-6 h-auto pt-2 sm:pt-0" />
                Cart
              </span>
              <span
                className="
                  absolute 
                  flex 
                  items-center 
                  justify-center 
                  w-5 
                  h-5 
                  top-1 
                  sm:top-1 
                  right-4 
                  sm:right-1 
                  bg-redColor 
                  text-zinc-50 
                  rounded-xl"
              >
                <p className="text-xs">{cartQt}</p>
              </span>
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="/Login"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <span className="flex flex-col items-center">
                {userStatus && <FaUserCircle className="w-6 h-auto" />}
                {!userStatus && <FaSignInAlt className="w-6 h-auto" />}
                {userStatus ? 'Profile' : 'Login'}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
