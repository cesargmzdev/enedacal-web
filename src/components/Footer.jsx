import PropTypes from 'prop-types';

const Footer = ({classNames}) => {
    const Year = new Date().getFullYear();
    return (
        <footer className={`text-center text-sm bg-black text-white ${classNames}`}>Copyright © {Year} Nicolás Dacal - All rights reserved</footer>
    );
};

Footer.propTypes = {
    classNames: PropTypes.string
};

export default Footer;
