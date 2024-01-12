/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {useState, useRef} from "react";

const PreviousButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/35 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10 mix-blend-difference"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="160 208 80 128 160 48" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></span></button>
  );
};

const NextButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/35 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10 mix-blend-difference"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="96 48 176 128 96 208" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></span></button>
  );
};

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const startTouch = useRef(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const handleTouchStart = (e) => {
    startTouch.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endTouch = e.changedTouches[0].clientX;
    const diff = startTouch.current - endTouch;

    if (Math.abs(diff) > 15) { // threshold value
      if (diff > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      {slides.map((slide, index) => {
        let transformValue = '';
        if (index === current - 1) {
          transformValue = 'translate-x-[-100%]';
          console.log(1);
        }
        if (index === current + 1) {
          transformValue = 'translate-x-[100%]';
          console.log(2);
        }
        if (index === current) {
          transformValue = 'translate-x-0';
        }
        if (index > current) {
          transformValue = 'translate-x-[100%]';
        }
        if (index < current) {
          transformValue = 'translate-x-[-100%]';
        }
        return (
          <div
            className={`absolute top-0 h-screen w-screen transition-all duration-200 ease-in-out transform ${transformValue}`}
            key={index}
          >
            <img
              src={slide}
              alt={`slider-${index}`}
              className="h-full w-full"
            />
          </div>
        );
      })}
      <div className="absolute top-1/2 flex justify-between p-8 w-full">
        <PreviousButton onClick={previousSlide} />
        <NextButton onClick={nextSlide} />
      </div>
    </div>
  );
};
export default Carousel;