// src/components/CookieModal.jsx
import PropTypes from "prop-types";
import Cookies from "js-cookie";

const CookieModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 }); // Set a cookie to remember the user's choice for 1 year
    onClose();
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 flex items-center justify-center p-4">
      <div className="rounded bg-white p-4 text-black shadow-lg">
        <h2 className="mb-4">This website uses cookies</h2>
        <p className="mb-4">
          We use cookies to ensure you get the best experience on our website.
        </p>
        <button
          onClick={handleAccept}
          className="rounded bg-black px-4 py-2 text-white"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieModal;

CookieModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
