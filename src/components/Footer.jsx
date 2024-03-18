import PropTypes from 'prop-types';

const Footer = ({classNames}) => {
    const Year = new Date().getFullYear();
    return (
        <p className={`text-center text-sm bg-black text-white ${classNames}`}>Copyright © {Year} Nicolás Dacal - All rights reserved</p>
    );
};

Footer.prototype = {
    classNames: PropTypes.string
};

export default Footer;
