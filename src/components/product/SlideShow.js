import 'tw-elements';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const SlideShow = ({ items }) => {
  let itemKey = 0;

  return (
    <div
      id="itemImages"
      className="relative w-full overflow-hidden rounded-xl carousel slide"
    >
      <div className="relative w-full overflow-hidden carousel-inner">
        {items.map((x) => (
          <div
            key={itemKey++}
            className={`carousel-item relative float-left w-full ${
              itemKey === 0 && 'active'
            }`}
          >
            <img src={x} className="block w-full" alt="Wild Landscape" />
          </div>
        ))}
      </div>

      <button
        className="left-0 slideShow_button "
        data-bs-target="#itemImages"
        data-bs-slide="prev"
      >
        <BsChevronDoubleLeft className="w-auto h-8 text-cyan-400" />
      </button>
      <button
        className="right-0 slideShow_button"
        data-bs-target="#itemImages"
        data-bs-slide="next"
      >
        <BsChevronDoubleRight className="w-auto h-8 text-cyan-400" />
      </button>
    </div>
  );
};

export default SlideShow;
