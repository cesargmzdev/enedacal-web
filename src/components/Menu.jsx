import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <div className='fixed w-full flex justify-between z-50 mix-blend-difference'>
      <Link className='text-white p-5 text-base' to={'/'}>
        <strong className='font-Montreal'>ENEDACAL</strong>
      </Link>
      <Link to={'/work'} className='text-white p-5 text-base'>
        <strong className='font-Montreal'>WORK</strong>
      </Link>
      <Link className='text-white p-5 text-base' to={'/about'}>
        <strong className='font-Montreal'>ABOUT</strong>
      </Link >
    </div>
  );
};

export default Menu;