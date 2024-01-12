import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Link className='text-white p-8 z-10 fixed top-0 text-xl mix-blend-difference' to={'/'}>
        <strong className='font-MontrealLight'>enedacal</strong>
      </Link>
      <Link className='text-white p-8 z-10 fixed top-0 right-0 text-xl mix-blend-difference' to={'/about'}>
        <strong className='font-MontrealLight'>Information</strong>
      </Link >
      <Link to={'/work'} className='text-white p-8 z-10 fixed bottom-0 text-xl mix-blend-difference'>
        <strong className='font-MontrealLight'>Work</strong>
      </Link>
    </>
  );
};

export default Menu;