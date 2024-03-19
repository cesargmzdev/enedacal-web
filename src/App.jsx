import Carousel from './components/MainCarrousel';
import Menu from './components/Menu';
import {motion} from "framer-motion";
import CarouselCursor from "./components/subcomponents/CarouselCursor";
import {useEffect, useState} from "react";

const App = () => {
  const [direction, setDirection] = useState('');
  const [slides, setSlides] = useState([]);

  const isMobileDevice = async () => {
    const isMobile = window.innerWidth < 768;
    let slides;
    if (isMobile) {
      const {default: BLN_mobile} = await import("./assets/projects/Mobile/BLN/BLN_anim_work.mp4");
      const {default: GOM_mobile} = await import("./assets/projects/Mobile/GOM/GOM_work.gif");
      const {default: MDM_mobile} = await import("./assets/projects/Mobile/MDM/m_proyecto_work.gif");
      const {default: MOML_mobile} = await import("./assets/projects/Mobile/MOML/knom.mp4");
      const {default: RUKATYPE_mobile} = await import("./assets/projects/Mobile/RUKATYPE/RUKATYPE_work.webp");
      slides = [
        {type: 'video', src: BLN_mobile, className: "object-cover"},
        {type: 'image', src: GOM_mobile, className: "object-cover"},
        {type: 'image', src: MDM_mobile, className: "object-cover"},
        {type: 'video', src: MOML_mobile},
        {type: 'image', src: RUKATYPE_mobile, className: "object-cover"}
      ];
    } else {
      const {default: BLN_desktop} = await import('./assets/projects/Desktop/BLN/BLN_home_anim.mp4');
      const {default: GOM_desktop} = await import('./assets/projects/Desktop/GOM/GOM_home.gif');
      const {default: MDM_desktop} = await import('./assets/projects/Desktop/MDM/MDM_home.gif');
      const {default: MOML_desktop} = await import('./assets/projects/Desktop/MOML/knom.mp4');
      const {default: RUKATYPE_desktop} = await import('./assets/projects/Desktop/RUKATYPE/RUKATYPE_home.webp');
      slides = [
        {type: 'video', src: BLN_desktop, className: "object-cover"},
        {type: 'image', src: GOM_desktop, className: "object-cover"},
        {type: 'image', src: MDM_desktop, className: "object-cover"},
        {type: 'video', src: MOML_desktop},
        {type: 'image', src: RUKATYPE_desktop, className: "object-cover"}
      ];
    }
    setSlides(slides);
  };

  useEffect(() => {
    isMobileDevice();
  }, []);

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