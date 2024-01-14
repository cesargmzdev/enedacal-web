import BERLIN from "./assets/projects/BERLIN.jpg";
import GOM from "./assets/projects/GOM.gif";
import MDM from "./assets/projects/MDM.gif";
import Carousel from './components/MainCarrousel';
import Menu from './components/Menu';
import {motion} from "framer-motion";

function App() {
  let images = [
    BERLIN,
    GOM,
    MDM
  ];

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}} className='flex flex-col font-Montreal'>
      <Menu />
      <main >
        <Carousel slides={images} />
      </main>
    </motion.div>
  );
}

export default App;
