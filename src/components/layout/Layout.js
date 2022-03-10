import Headers from './Headers';
import { useSelector, useDispatch } from 'react-redux';
import { showHeader } from '../redux/slices/headerSlice';

const Layout = (props) => {
  const dark = useSelector((state) => state.darkModeRedux);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen relative">
      <Headers />

      <main
        onClick={() => dispatch(showHeader('outside'))}
        className={`min-h-screen px-5 py-16 sm:px-6 sm:py-20 ${
          dark ? 'bg-[#444445]' : 'bg-gradient-to-br from-cyan-50'
        }`}
      >
        {props.children}
      </main>

      <footer className="bg-zinc-800 absolute bottom-0 w-full text-center text-slate-50 py-2">
        All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
