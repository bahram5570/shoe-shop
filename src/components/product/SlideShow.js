import React, { Fragment, useState } from 'react';
import 'tw-elements';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import ImageShow from './imageShow';

const SlideShow = ({ items }) => {
  const [showImage, setShowImage] = useState(null);

  const closeImageHandler = () => {
    setShowImage(null);
  };

  let itemKey = 0;

  return (
    <Fragment>
      {showImage && (
        <ImageShow image={showImage} onCloseImage={closeImageHandler} />
      )}

      <div
        id="itemImages"
        className="relative w-full overflow-hidden rounded-xl carousel slide"
      >
        <div
          className="
            relative 
            w-full 
            overflow-hidden 
            carousel-inner 
            sm:cursor-pointer 
            sm:hover:scale-110 
            sm:duration-200"
        >
          {items.map((x) => (
            <div
              onClick={() => window.innerWidth > '640' && setShowImage(x)}
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
    </Fragment>
  );
};

export default SlideShow;
