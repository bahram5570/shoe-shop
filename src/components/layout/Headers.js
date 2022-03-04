import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mode } from '../redux/slices/darkModeSlice';
import { showHeader } from '../redux/slices/headerSlice';
import {
  FaHome,
  FaShoePrints,
  FaBars,
  FaSignInAlt,
  FaShoppingCart,
  FaSun,
  FaMoon,
  FaUserCircle,
} from 'react-icons/fa';

const Headers = () => {
  const dispatch = useDispatch();

  const dark = useSelector((state) => state.darkModeRedux);

  const showMenu = useSelector((state) => state.headerRedux).showHeader;

  const userStatus = useSelector((state) => state.signinRedux).loggedUser;
  const cartQt = useSelector((state) => state.cartRedux).length;

  return (
    <header className="fixed w-full px-4 py-2 text-white sm:absolute sm:top-0 bg-zinc-800 z-40">
      <nav className="flex items-center justify-between w-full">
        <h1 className="flex text-2xl italic font-headerFont text-yellowColor pointer-events-none">
          <FaShoePrints className="w-auto h-8 mr-2" />
          Shoe Shop
        </h1>
        <FaBars
          onClick={() => dispatch(showHeader())}
          className={`z-10 w-auto h-6 cursor-pointer sm:hidden duration-300 ${
            showMenu && 'rotate-90'
          }`}
        />

        <ul
          className={`
            ${showMenu ? 'right-0' : '-right-20'}
            absolute 
            top-0 
            sm:right-0
            flex 
            flex-col 
            duration-300
            w-20 
            h-screen 
            sm:w-fit 
            sm:flex-row 
            sm:items-center 
            sm:relative 
            pt-14 
            sm:pt-0 
            bg-zinc-800 
            bg-opacity-90 
            sm:bg-opacity-100 
            sm:h-fit
          `}
        >
          <li className="flex">
            <NavLink
              to="/Home"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <FaHome className="w-6 h-auto" />
            </NavLink>
          </li>

          <li className="">
            <NavLink
              end
              to="/Shoes"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              Shoes
            </NavLink>
          </li>

          <li className="flex justify-center">
            <button
              onClick={() => dispatch(mode())}
              className="border-2 rounded-2xl flex justify-center items-center w-8 h-8 outline-none"
            >
              {dark ? <FaMoon /> : <FaSun />}
            </button>
          </li>

          <li className="relative flex sm:mx-2">
            <NavLink
              to="/Cart"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <FaShoppingCart className="w-6 h-auto pt-2 sm:pt-0" />
              <span
                className="
                  absolute 
                  flex 
                  items-center 
                  justify-center 
                  w-5 
                  h-5 
                  top-2 
                  sm:top-0 
                  right-4 
                  sm:right-0 
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
              {userStatus && <FaUserCircle className="w-6 h-auto" />}
              {!userStatus && <FaSignInAlt className="w-6 h-auto" />}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
