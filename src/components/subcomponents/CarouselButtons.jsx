import PropTypes from 'prop-types';
import LeftArrow from '../../assets/LeftArrow.svg';
import RightArrow from '../../assets/RightArrow.svg';

const PrevButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button" className='absolute h-full w-1/2' style={{cursor: `url(${LeftArrow}) 8 8, auto`}} />
  );
};

const NextButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button" className='absolute h-full right-0 w-1/2 mix-blend-difference' style={{cursor: `url(${RightArrow}) 8 8, auto`}} />
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