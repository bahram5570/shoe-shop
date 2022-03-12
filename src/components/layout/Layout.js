import { useSelector, useDispatch } from 'react-redux';
import { showHeader } from '../redux/slices/headerSlice';
import Headers from './Headers';
import Footer from './Footer';
import Scroller from '../scroller/Scroller';

const Layout = (props) => {
  const dark = useSelector((state) => state.darkModeRedux);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen relative">
      <Scroller />

      <Headers />

      <main
        onClick={() => dispatch(showHeader('outside'))}
        style={{ maxWidth: window.screen.availWidth }}
        className={`
          min-h-screen 
          px-5 
          md:px-0 
          py-16 
          sm:py-20 
          ${dark ? 'bg-[#444445]' : 'bg-gradient-to-br from-cyan-50'}
        `}
      >
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
