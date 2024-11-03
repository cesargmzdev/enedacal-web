import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

const CarouselCursor = ({ direction }) => {
  const cursorRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const cursorStyle = window.getComputedStyle(event.target).cursor;
    const windowWidth = window.innerWidth;
    const marginSize = Math.max(0, (windowWidth - 1536) / 2); // Calcula el tamaño del margen

    if (
      isMobileDevice() ||
      cursorStyle === "pointer" ||
      event.pageX < marginSize ||
      event.pageX > windowWidth - marginSize
    ) {
      if (cursorRef.current) {
        cursorRef.current.style.display = "none";
      }
    } else {
      if (cursorRef.current) {
        cursorRef.current.style.display = "block";
        positionRef.current = { x: event.pageX - 50, y: event.pageY - 50 };
      }
    }
  };

  const handleMouseOut = () => {
    if (cursorRef.current) {
      cursorRef.current.style.display = "none";
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

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (direction === "right") {
    return (
      <div
        className="pointer-events-none fixed z-10 h-[85px] w-[125px] mix-blend-difference"
        ref={cursorRef}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-RightArrow bg-contain bg-center bg-no-repeat" />
      </div>
    );
  } else if (direction === "left") {
    return (
      <div
        className="pointer-events-none fixed z-10 h-[85px] w-[125px] mix-blend-difference"
        ref={cursorRef}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-LeftArrow bg-contain bg-center bg-no-repeat" />
      </div>
    );
  }
};

CarouselCursor.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default CarouselCursor;
