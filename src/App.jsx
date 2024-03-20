import {useCallback, useEffect, useState} from "react";
import {motion} from "framer-motion";
import Carousel from './components/MainCarrousel';
import Menu from './components/Menu';
import CarouselCursor from "./components/subcomponents/CarouselCursor";
import BLN_mobile from "./assets/projects/Mobile/BLN/BLN_anim_work.mp4";
import GOM_mobile from "./assets/projects/Mobile/GOM/GOM_work.gif";
import CATA_mobile from "./assets/projects/Mobile/CATA/cata_work.webp";
import MOML_mobile from "./assets/projects/Mobile/MOML/knom.mp4";
import RUKATYPE_mobile from "./assets/projects/Mobile/RUKATYPE/RUKATYPE_work.webp";
import BLN_desktop from './assets/projects/Desktop/BLN/BLN_home_anim.mp4';
import GOM_desktop from './assets/projects/Desktop/GOM/GOM_home.gif';
import CATA_desktop from './assets/projects/Desktop/CATA/cata_home.webp';
import MOML_desktop from './assets/projects/Desktop/MOML/knom.mp4';
import RUKATYPE_desktop from './assets/projects/Desktop/RUKATYPE/RUKATYPE_home.webp';

const App = () => {
  const [direction, setDirection] = useState('');
  const [slides, setSlides] = useState([]);

  const isMobileDevice = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    let slides;
    if (isMobile) {
      slides = [
        {type: 'video', src: BLN_mobile, className: "object-cover"},
        {type: 'image', src: RUKATYPE_mobile, className: "object-cover"},
        {type: 'image', src: CATA_mobile, className: "object-cover"},
        {type: 'video', src: MOML_mobile},
        {type: 'image', src: GOM_mobile, className: "object-cover"},
      ];
    } else {
      slides = [
        {type: 'video', src: BLN_desktop, className: "object-cover"},
        {type: 'image', src: RUKATYPE_desktop, className: "object-cover"},
        {type: 'image', src: CATA_desktop, className: "object-cover"},
        {type: 'video', src: MOML_desktop},
        {type: 'image', src: GOM_desktop, className: "object-cover"},
      ];
    }
    setSlides(slides);
  }, []);

  useEffect(() => {
    isMobileDevice();
  }, [isMobileDevice]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setDirection(event.clientX > window.innerWidth / 2 ? 'right' : 'left');
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main>
        <CarouselCursor direction={direction} isVisible={true} />
        <Carousel slides={slides} />
      </main>
    </motion.div>
  );
};

export default App;