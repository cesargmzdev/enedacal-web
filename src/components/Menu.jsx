import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header className="fixed z-50 flex w-dvw justify-between mix-blend-difference">
      <Link
        className="p-5 text-base text-white duration-300 hover:text-yellow-500 hover:underline"
        to={"/"}
      >
        <strong className="font-Montreal">ENEDACAL</strong>
      </Link>
      <Link
        to={"/work"}
        className="p-5 text-base text-white duration-300 hover:text-yellow-500 hover:underline"
      >
        <strong className="font-Montreal">WORK</strong>
      </Link>
      <Link
        className="p-5 text-base text-white duration-300 hover:text-yellow-500 hover:underline"
        to={"/about"}
      >
        <strong className="font-Montreal">ABOUT</strong>
      </Link>
    </header>
  );
};

export default Menu;
