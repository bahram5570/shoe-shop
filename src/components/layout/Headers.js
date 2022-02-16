import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaShoePrints,
  FaBars,
  FaSignInAlt,
  FaShoppingCart,
} from 'react-icons/fa';

const Headers = () => {
  return (
    <header className="fixed sm:relative w-full bg-zinc-800 text-white px-4 py-2">
      <nav className="flex justify-between items-center">
        <h1 className="font-headerFont text-2xl italic flex text-headerColor">
          <FaShoePrints className="w-auto h-8 mr-2" />
          Shoe Shop
        </h1>
        <FaBars className="sm:hidden w-auto h-6 z-10 cursor-pointer" />

        <ul
          className="flex 
            flex-col
            w-20
            sm:w-fit
            sm:flex-row
            sm:items-center
            absolute 
            sm:relative 
            top-0
            pt-14
            sm:pt-0
            right-0 
            bg-zinc-800
            bg-opacity-90 
            sm:bg-opacity-100 
            h-screen
            sm:h-fit"
        >
          <li className="flex">
            <NavLink
              to="/Home"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <FaHome className="h-auto w-6" />
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/Shoes"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              Shoes
            </NavLink>
          </li>

          <li className="flex justify-center">dark</li>

          <li className="flex relative sm:mx-2">
            <NavLink
              to="/Cart"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <FaShoppingCart className="h-auto w-6 pt-2 sm:pt-0" />
              <span
                className="
                        absolute 
                        top-2
                        sm:top-0
                        right-4 
                        sm:right-0
                        bg-cartColor 
                        text-zinc-50 
                        w-5 
                        h-5 
                        flex 
                        items-center 
                        justify-center 
                        rounded-xl"
              >
                <p className="text-xs">55</p>
              </span>
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="/Login"
              className={(x) => (x.isActive ? 'bg-zinc-50 text-zinc-900' : '')}
            >
              <FaSignInAlt className="h-auto w-6" />
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
