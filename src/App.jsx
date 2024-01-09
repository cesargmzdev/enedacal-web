import './App.css';
// import HomeSlider from './components/MainCarrousel';
import BERLIN from "./assets/Projects/BERLIN.jpg";
import GOM from "./assets/Projects/GOM.gif";
import MDM from "./assets/Projects/MDM.gif";
import Carousel from './components/MainCarrousel';

function App() {
  let slides = [
    BERLIN,
    GOM,
    MDM
  ];

  return (
    <div className='flex flex-col font-Montreal'>
      <div className='text-white flex justify-between absolute z-10 w-full p-8 text-xl' style={{
        'mix-blend-mode': 'difference'
      }}>
        <a href=''>
          <strong>Enedacal</strong>
        </a>
        <a href=''>
          <strong>Information</strong>
        </a >
      </div>
      <main >
        <Carousel slides={slides} />
      </main>
      <a className='text-white p-8 z-10 fixed bottom-0 text-xl' style={{
        'mix-blend-mode': 'difference'
      }} href=''>
        <strong>Work</strong>
      </a>
    </div>
  );
}

export default App;
