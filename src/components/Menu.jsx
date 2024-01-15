import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Link className='text-white p-5 z-10 fixed top-0 text-base mix-blend-difference' to={'/'}>
        <strong className='font-Montreal'>enedacal</strong>
      </Link>
      <Link className='text-white p-5 z-10 fixed top-0 right-0 text-base mix-blend-difference' to={'/about'}>
        <strong className='font-Montreal'>About</strong>
      </Link >
      <Link to={'/work'} className='text-white p-5 z-10 fixed bottom-0 text-base mix-blend-difference'>
        <strong className='font-Montreal'>Work</strong>
      </Link>
    </>
  );
};

export default Menu;