/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {useState, useRef} from "react";
import {NextButton, PrevButton} from "./subcomponents/CarouselButtons";

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
        <PrevButton onClick={previousSlide} />
        <NextButton onClick={nextSlide} />
      </div>
    </div>
  );
};
export default Carousel;