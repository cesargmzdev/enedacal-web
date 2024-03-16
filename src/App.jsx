import BLN from './assets/projects/Desktop/BLN/BLN_home_anim.mp4';
import GOM from './assets/projects/Desktop/GOM/GOM_home.gif';
import MDM from './assets/projects/Desktop/MDM/MDM_home.gif';
import MOML from './assets/projects/Desktop/MOML/knom.mp4';
import RUKATYPE from './assets/projects/Desktop/RUKATYPE/RUKATYPE_home.jpg';
import SCHALTBAU from './assets/projects/Desktop/SCHALTBAU/SB_home.png';
import Carousel from './components/MainCarrousel';
import Menu from './components/Menu';
import {motion} from "framer-motion";
import CarouselCursor from "./components/subcomponents/CarouselCursor";
import {useEffect, useState} from "react";

const App = () => {
  const slides = [
    {type: 'video', src: BLN},
    {type: 'image', src: GOM},
    {type: 'image', src: MDM},
    {type: 'video', src: MOML},
    {type: 'image', src: RUKATYPE},
    {type: 'image', src: SCHALTBAU},
  ];

  const [direction, setDirection] = useState('');

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
      <CarouselCursor direction={direction} />
      <main>
        <Carousel slides={slides} />
      </main>
    </motion.div>
  );
};

export default App;
