import './App.css';
import {CarouselComponent} from './components/MainCarrousel';
import {Navbar} from './components/Navbar';

function App() {

  return (
    <div className='bg-black h-screen flex flex-col font-Montreal'>
      <header>
        <Navbar />
      </header>
      <main className='flex-grow'>
        <CarouselComponent />
      </main>
    </div>
  );
}

export default App;
