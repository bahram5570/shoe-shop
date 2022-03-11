import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeStructure from './HomeStructure';
import LogoStructure from './LogoStructure';

import leather from '../data/images/home/leather.png';
import sneaker from '../data/images/home/sneaker.png';
import casual from '../data/images/home/casual.png';
import wide from '../data/images/home/wide.png';

import logo1 from '../data/images/home/logos (1).png';
import logo2 from '../data/images/home/logos (2).png';
import logo3 from '../data/images/home/logos (3).png';
import logo4 from '../data/images/home/logos (4).png';
import logo5 from '../data/images/home/logos (5).png';
import logo6 from '../data/images/home/logos (6).png';

import shop from '../data/images/home/shop.png';
import man from '../data/images/home/man.png';
import woman from '../data/images/home/woman.png';
import kid from '../data/images/home/kid.png';
import online from '../data/images/home/online.jpg';

const Home = () => {
  const dark = useSelector((state) => state.darkModeRedux);

  const navigate = useNavigate();

  return (
    <main className={`font-headerFont ${dark && 'text-white'}`}>
      <section className="relative flex justify-center items-center">
        <span className="absolute top-0 md:static">
          <h2 className="homeHeaders shadow-[4px_6px_7px_#ff5555]">
            New Season!
          </h2>
          <h2 className="homeHeaders shadow-[4px_6px_7px_#55ff55]">
            New Fashion!
          </h2>
          <h2 className="homeHeaders shadow-[4px_6px_7px_#ffff00]">
            New Shoes!
          </h2>
        </span>
        <img
          src={shop}
          alt="shop"
          className="mt-44 md:mt-0 w-full md:w-1/2 lg:w-fit"
        />
      </section>

      <section className="md:my-2">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <img
            src={leather}
            alt="leather"
            className="rounded-md mx-5 md:w-96 lg:w-fit"
          />
          <p className="text-2xl md:text-4xl mx-5 text-center md:text-justify">
            Best leather and vegan leather shoes. The leather shoes come in both
            men’s and women’s styles.
          </p>
        </div>
      </section>

      <section className="my-10 md:my-0">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
          <p className="text-2xl md:text-4xl mx-5 text-center md:text-justify">
            Nothing is more sleek than a plain black pair of kicks with just a
            pop of something shiny.
          </p>
          <img
            src={sneaker}
            alt="sneaker"
            className="rounded-md mx-5 md:w-96 lg:w-fit"
          />
        </div>
      </section>

      <section className="my-10 md:my-0">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <img
            src={casual}
            alt="casual"
            className="rounded-md mx-5 md:w-96 lg:w-fit"
          />
          <p className="text-2xl md:text-4xl mx-5 text-center md:text-justify">
            We're not sure if they're running shoes, but they're too cute to
            ruin on trails, y'all!
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 md:flex md:justify-around my-12">
        <HomeStructure name="Men" image={man} />
        <HomeStructure name="Women" image={woman} />
        <HomeStructure name="Kids" image={kid} />
        <HomeStructure name="Up To 20% OFF!" image={online} />
      </section>

      <section className="relative my-10">
        <img src={wide} alt="wide" className="w-full rounded-md" />
        <div
          className="
            absolute 
            top-4 
            left-2 
            sm:top-12 
            sm:left-6 
            md:top-24 
            md:left-20 
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-6xl 
            italic"
        >
          <p>Feel the difference!</p>
          <button
            onClick={() => navigate('/Shop')}
            type="button"
            className="mt-3 border-2 text-white px-4 rounded-lg text-base md:text-xl lg:text-3xl hover:scale-110 duration-200"
          >
            Shop Now
          </button>
        </div>
      </section>

      <section className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between">
        <LogoStructure name="logo1" image={logo1} color="#eeeeee" />
        <LogoStructure name="logo2" image={logo2} color="#000000" />
        <LogoStructure name="logo3" image={logo3} color="#ffffff" />
        <LogoStructure name="logo4" image={logo4} color="#ffffff" />
        <LogoStructure name="logo5" image={logo5} color="#ffffff" />
        <LogoStructure name="logo6" image={logo6} color="#00154f" />
      </section>
    </main>
  );
};

export default Home;
