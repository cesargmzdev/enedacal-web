import BERLIN from "./assets/projects/BERLIN.jpg";
import GOM from "./assets/projects/GOM.gif";
import MDM from "./assets/projects/MDM.gif";
import Carousel from './components/MainCarrousel';
import Menu from './components/Menu';

function App() {
  let slides = [
    BERLIN,
    GOM,
    MDM
  ];

  return (
    <div className='flex flex-col font-Montreal'>
      <Menu />
      <main >
        <Carousel slides={slides} />
      </main>
    </div>
  );
}

export default App;
