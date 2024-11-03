import PropTypes from "prop-types";

const PrevButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute h-full w-1/2 cursor-none"
    />
  );
};

const NextButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute right-0 h-full w-1/2 cursor-none"
    />
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

PrevButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { PrevButton, NextButton };
