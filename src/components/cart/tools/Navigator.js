import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';

const Navigator = ({ shopStatus }) => {
  const dark = useSelector((state) => state.darkModeRedux);

  return (
    <section className="flex justify-center my-5 md:my-8">
      <div className="w-10/12 md:w-2/3 flex justify-between relative">
        <div className="navigatorSteps">
          <p>{shopStatus > 1 ? <FaCheck /> : 1}</p>
          <p className={`absolute -top-6 md:-top-8 ${dark && 'text-white'}`}>
            Shopping
          </p>
        </div>

        <div className="navigatorSteps">
          <p>{shopStatus > 2 ? <FaCheck /> : 2}</p>
          <p className={`absolute -top-6 md:-top-8 ${dark && 'text-white'}`}>
            Address
          </p>
        </div>

        <div className="navigatorSteps">
          <p>{shopStatus > 3 ? <FaCheck /> : 3}</p>
          <p className={`absolute -top-6 md:-top-8 ${dark && 'text-white'}`}>
            Payment
          </p>
        </div>

        <div className="navigatorSteps">
          <p>{shopStatus > 4 ? <FaCheck /> : 4}</p>
          <p className={`absolute -top-6 md:-top-8 ${dark && 'text-white'}`}>
            Order
          </p>
        </div>

        <span className="h-1 w-full bg-yellowColor absolute top-3 md:top-4" />
      </div>
    </section>
  );
};

export default Navigator;
