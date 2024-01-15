import PropTypes from 'prop-types';

const PrevButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button"><svg xmlns="http://www.w3.org/2000/svg" className='mix-blend-difference' width="30" height="30" fill="white" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="160 208 80 128 160 48" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></button>
  );
};

const NextButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button"><svg xmlns="http://www.w3.org/2000/svg" className='mix-blend-difference' width="30" height="30" fill="white" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="96 48 176 128 96 208" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></button>
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