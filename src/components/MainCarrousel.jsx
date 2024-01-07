import {Carousel} from "keep-react";
import BERLIN from "../assets/0. Home-Slider/BERLIN.jpg";
import GOM from "../assets/0. Home-Slider/GOM.gif";
import MDM from "../assets/0. Home-Slider/MDM.gif";

export const CarouselComponent = () => {
  return (
    <Carousel slideInterval={6000} showControls={true} indicators={true} className="min-h-full">
      <img
        src={BERLIN}
        alt="slider-1"
      />
      <img
        src={GOM}
        alt="slider-2"
      />
      <img
        src={MDM}
        alt="slider-3"
      />
    </Carousel>
  );
};
