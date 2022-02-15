import { NavLink } from 'react-router-dom';
import { FaShoePrints, FaBars, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';

const Layout = (props) => {
  return (
    <div className="min-h-screen relative pb-10">
      <header className="bg-zinc-800 text-white px-4 py-2">
        <nav className="flex justify-between items-center">
          <h1 className="font-headerFont text-2xl italic flex text-headerColor">
            <FaShoePrints className="w-auto h-8 mr-2" />
            Shoe Shop
          </h1>
          <FaBars className="sm:hidden w-auto h-6 z-10 cursor-pointer" />

          <ul
            className="block 
            sm:flex 
            sm:items-center
            absolute 
            sm:relative 
            top-0
            sm:top-0 
            pt-16
            sm:pt-0
            px-4
            sm:px-0
            right-0 
            bg-zinc-800
            bg-opacity-90 
            sm:bg-opacity-100 
            h-full
            sm:h-fit"
          >
            <li>
              <NavLink
                to="/Home"
                className={(x) =>
                  x.isActive ? 'bg-zinc-50 text-zinc-900' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li className="border-b-2 sm:border-0">
              <NavLink
                to="/Shoes"
                className={(x) =>
                  x.isActive ? 'bg-zinc-50 text-zinc-900' : ''
                }
              >
                Shoes
              </NavLink>
            </li>
            <li className='px-2 py-3'>
              dark
            </li>
            <li className='flex relative sm:mx-2'>
              <NavLink
                to="/Cart"
                className={(x) =>
                  x.isActive ? 'bg-zinc-50 text-zinc-900' : ''
                }
              >
                <FaShoppingCart className='h-auto w-6' />
                <span className='absolute top-0 right-10 sm:-right-1 bg-cartColor text-zinc-50 w-5 h-5 flex items-center justify-center rounded-xl'>
                  <p className='text-xs'>5</p>
                </span>
              </NavLink>
            </li>
            <li className='flex'>
              <NavLink
                to="/Login"
                className={(x) =>
                  x.isActive ? 'bg-zinc-50 text-zinc-900' : ''
                }
              >
                <FaSignInAlt className='h-auto w-6' />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="min-h-full p-2">{props.children}</main>

      <footer className="bg-zinc-800 absolute bottom-0 w-full text-center text-slate-50 py-2">
        All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
