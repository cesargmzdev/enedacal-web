import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <header className='fixed max-w-screen-2xl w-full flex justify-between z-50 mix-blend-difference'>
      <Link className='text-white p-5 text-base hover:text-yellow-500 hover:underline duration-300' to={'/'}>
        <strong className='font-Montreal'>ENEDACAL</strong>
      </Link>
      <Link to={'/work'} className='text-white p-5 text-base hover:text-yellow-500 hover:underline duration-300'>
        <strong className='font-Montreal'>WORK</strong>
      </Link>
      <Link className='text-white p-5 text-base hover:text-yellow-500 hover:underline duration-300' to={'/about'}>
        <strong className='font-Montreal'>ABOUT</strong>
      </Link >
    </header>
  );
};

export default Menu;