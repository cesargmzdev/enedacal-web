import BLN_desktop from './assets/projects/Desktop/BLN/BLN_home_anim.mp4';
import GOM_desktop from './assets/projects/Desktop/GOM/GOM_home.gif';
import MDM_desktop from './assets/projects/Desktop/MDM/MDM_home.gif';
import MOML_desktop from './assets/projects/Desktop/MOML/knom.mp4';
import RUKATYPE_desktop from './assets/projects/Desktop/RUKATYPE/RUKATYPE_home.jpg';
import BLN_mobile from "./assets/projects/Mobile/BLN/BLN_anim_work.mp4";
import GOM_mobile from "./assets/projects/Mobile/GOM/GOM_work.gif";
import MDM_mobile from "./assets/projects/Mobile/MDM/m_proyecto_work.gif";
import MOML_mobile from "./assets/projects/Mobile/MOML/knom.mp4";
import RUKATYPE_mobile from "./assets/projects/Mobile/RUKATYPE/RUKATYPE_work.png";
import Carousel from './components/MainCarrousel';
import Menu from './components/Menu';
import {motion} from "framer-motion";
import CarouselCursor from "./components/subcomponents/CarouselCursor";
import {useEffect, useRef, useState} from "react";

const App = () => {
  const isMobileDevice = () => {
    const isMobile = window.innerWidth < 768;
    const slides = [
      {type: 'video', src: BLN_desktop, className: "object-cover"},
      {type: 'image', src: GOM_desktop, className: "object-cover"},
      {type: 'image', src: MDM_desktop, className: "object-cover"},
      {type: 'video', src: MOML_desktop},
      {type: 'image', src: RUKATYPE_desktop, className: "object-cover"}
    ];
    const mobileSlides = [
      {type: 'video', src: BLN_mobile, className: "object-cover"},
      {type: 'image', src: GOM_mobile, className: "object-cover"},
      {type: 'image', src: MDM_mobile, className: "object-cover"},
      {type: 'video', src: MOML_mobile},
      {type: 'image', src: RUKATYPE_mobile, className: "object-cover"}
    ];
    if (isMobile) {
      return mobileSlides;
    } else {
      return slides;
    }
  };

  const [direction, setDirection] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setDirection(event.clientX > window.innerWidth / 2 ? 'right' : 'left');
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}} className='flex flex-col font-Montreal'>
      <Menu />
      <main ref={sectionRef}>
        <CarouselCursor direction={direction} parentRef={sectionRef} isVisible={true} />
        <Carousel slides={isMobileDevice()} />
      </main>
    </motion.div>
  );
};

export default App;
