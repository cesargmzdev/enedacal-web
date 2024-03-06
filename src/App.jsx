import BERLIN from "./assets/projects/BERLIN.jpg";
import GOM from "./assets/projects/GOM.gif";
import MDM from "./assets/projects/MDM.gif";
import VIDEO from "./assets/projects/video_test.mp4";
import VIDEO2 from "./assets/projects/bln_home.mp4";
import Carousel from './components/MainCarrousel';
import Menu from './components/Menu';
import {motion} from "framer-motion";
import CarouselCursor from "./components/subcomponents/CarouselCursor";
import {useEffect, useState} from "react";

const App = () => {
  let slides = [
    {type: 'image', src: BERLIN},
    {type: 'image', src: GOM},
    {type: 'image', src: MDM},
    {type: 'video', src: VIDEO},
    {type: 'video', src: VIDEO2}
  ];

  const [direction, setDirection] = useState('left');

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
