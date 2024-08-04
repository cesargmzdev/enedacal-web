import PropTypes from "prop-types";

const Footer = ({ classNames }) => {
  const Year = new Date().getFullYear();
  return (
    <footer className={`text-center text-sm bg-black text-white ${classNames}`}>
      Copyright &copy; {Year} - Website designed by Nico Dacal, developed by
      C&eacute;sar G&oacute;mez - All&nbsp;rights&nbsp;reserved
    </footer>
  );
};

Footer.propTypes = {
  classNames: PropTypes.string,
};

export default Footer;
