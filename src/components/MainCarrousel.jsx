import PropTypes from 'prop-types';
import {useState, useRef, useCallback, useEffect} from "react";
import {NextButton, PrevButton} from "./subcomponents/CarouselButtons";

const VideoSlide = ({src, opacityValue, className}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (opacityValue === 1 && videoRef.current) {
      videoRef.current.load();
    }
  }, [opacityValue]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay
      loop
      muted
    />
  );
};

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const startTouch = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrent(current => current === slides.length - 1 ? 0 : current + 1);
  }, [slides.length]);

  const previousSlide = useCallback(() => {
    setCurrent(current => current === 0 ? slides.length - 1 : current - 1);
  }, [slides.length]);

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

        if (slide.type === 'image') {
          return (
            <div
              className={`absolute top-0 h-dvh w-dvw max-w-screen-2xl transition-all duration-500 ease-in-out transform ${transformValue}`}
              style={{opacity: opacityValue}} // Apply the opacity
              key={slide.src} // Use slide src as key
            >
              <img
                src={slide.src}
                alt={`slider-${index}`}
                className={`h-full w-full bg-black ${slide.className}`}
              />
            </div>
          );
        } else if (slide.type === 'video') {
          return (
            <div
              className={`absolute top-0 h-dvh w-dvw max-w-screen-2xl transition-all duration-500 ease-in-out transform ${transformValue}`}
              style={{opacity: opacityValue}} // Apply the opacity
              key={slide.src} // Use slide src as key
            >
              <VideoSlide
                src={slide.src}
                opacityValue={opacityValue}
                className={`h-full w-full bg-black ${slide.className}`}
              />
            </div>
          );
        }

        return null;
      })}
      <div>
        <PrevButton onClick={previousSlide} />
        <NextButton onClick={nextSlide} />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
      className: PropTypes.string
    })
  ).isRequired,
};

VideoSlide.propTypes = {
  src: PropTypes.string.isRequired,
  opacityValue: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Carousel;