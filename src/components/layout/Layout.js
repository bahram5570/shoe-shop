import Headers from './Headers';
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const dark = useSelector((state) => state.darkModeRedux);

  return (
    <div className="min-h-screen relative w-screen">
      <Headers />

      <main
        className={`min-h-screen px-5 py-16 sm:px-6 sm:py-20 ${
          dark ? 'bg-[#444445]' : 'bg-neutral-50'
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
