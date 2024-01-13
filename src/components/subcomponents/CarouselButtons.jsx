import PropTypes from 'prop-types';

const PrevButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/35 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10 mix-blend-difference"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="160 208 80 128 160 48" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></span></button>
  );
};

const NextButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/35 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10 mix-blend-difference"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="96 48 176 128 96 208" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></span></button>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

PrevButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export {
  PrevButton,
  NextButton
};