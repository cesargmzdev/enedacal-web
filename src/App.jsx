import BERLIN from "./assets/projects/BERLIN.jpg";
import GOM from "./assets/projects/GOM.gif";
import MDM from "./assets/projects/MDM.gif";
import Carousel from './components/MainCarrousel';
import Menu from './components/Menu';
import {motion} from "framer-motion";
import Cookies from 'js-cookie';
import CookieModal from './components/CookieModal';
import {useState, useEffect} from 'react'; // Import the useState hook

const App = () => {
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);

  useEffect(() => {
    const cookiesAccepted = Cookies.get('cookiesAccepted');
    if (!cookiesAccepted) {
      setCookieModalOpen(true);
    }
  }, []);

  const handleCookieModalClose = () => {
    setCookieModalOpen(false);
  };
  let images = [
    BERLIN,
    GOM,
    MDM
  ];

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}} className='flex flex-col font-Montreal'>
      <Menu />
      <CookieModal isOpen={isCookieModalOpen} onClose={handleCookieModalClose} />
      <main >
        <Carousel slides={images} />
      </main>
    </motion.div>
  );
};

export default App;
