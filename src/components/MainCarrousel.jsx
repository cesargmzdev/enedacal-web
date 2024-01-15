import PropTypes from 'prop-types';
import {useState, useRef, useCallback} from "react";
import {NextButton, PrevButton} from "./subcomponents/CarouselButtons";

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const startTouch = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }, [current, slides.length]);

  const previousSlide = useCallback(() => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }, [current, slides.length]);

  const handleTouchStart = useCallback((e) => {
    startTouch.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const endTouch = e.changedTouches[0].clientX;
    const diff = startTouch.current - endTouch;

    if (Math.abs(diff) > 15) { // threshold value
      if (diff > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  }, [nextSlide, previousSlide]);

  return (
    <div className="relative h-screen w-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      {slides.map((slide, index) => {
        const length = slides.length;
        const diff = ((index - current) + length) % length;
        let transformValue = '';
        let opacityValue = 0;

        if (diff === 0) {
          transformValue = 'translate-x-0';
          opacityValue = 1; // Slide in the center is visible
        } else if (diff === 1) {
          transformValue = 'translate-x-[100%]';
        } else if (diff === length - 1) {
          transformValue = 'translate-x-[-100%]';
        } else {
          return null; // Don't render this slide
        }

        return (
          <div
            className={`absolute top-0 h-screen w-screen transition-all duration-500 ease-in-out transform ${transformValue}`}
            style={{opacity: opacityValue}} // Apply the opacity
            key={slide} // Use slide as key
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

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;