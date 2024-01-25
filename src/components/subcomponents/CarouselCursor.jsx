import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const CarouselCursor = ({direction}) => {
  const cursorRef = useRef(null);
  const positionRef = useRef({x: 0, y: 0});

  const handleMouseMove = (event) => {
    const cursorStyle = window.getComputedStyle(event.target).cursor;
    if (isMobileDevice() || cursorStyle === 'pointer') {
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
    } else {
      if (cursorRef.current) {
        cursorRef.current.style.display = 'block';
        positionRef.current = {x: event.pageX - 50, y: event.pageY - 50};
      }
    }
  };

  useEffect(() => {
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${positionRef.current.x}px`;
        cursorRef.current.style.top = `${positionRef.current.y}px`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (direction === 'right') {
    return (
      <div className="w-[125px] h-[85px] mix-blend-difference fixed z-10 pointer-events-none" ref={cursorRef}>
        <div className="bg-RightArrow absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat" />
      </div>
    );
  } else if (direction === 'left') {
    return (
      <div className="w-[125px] h-[85px] mix-blend-difference fixed z-10 pointer-events-none" ref={cursorRef}>
        <div className="bg-LeftArrow absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat" />
      </div>
    );
  }
};

CarouselCursor.propTypes = {
  direction: PropTypes.string.isRequired
};

export default CarouselCursor;