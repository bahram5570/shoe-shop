import { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import { useSelector } from 'react-redux';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Scroller = () => {
  const dark = useSelector((state) => state.darkModeRedux);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollTracker = () => {
      if (window.pageYOffset > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', scrollTracker);
    return () => window.removeEventListener('scroll', scrollTracker);
  }, []);

  return (
    <FaArrowAltCircleUp
      onClick={() => animateScroll.scrollToTop()}
      className={`
            ${show ? '' : 'hidden'}
            fixed
            bottom-6
            right-4
            sm:right-6
            z-10
            w-10
            sm:w-12
            h-auto
            sm:cursor-pointer
            animate-pulse
            border-2
            rounded-full
            p-1
            ${
              dark
                ? 'fill-white border-white bg-black'
                : 'fill-black border-black bg-white'
            }
         `}
    />
  );
};

export default Scroller;
