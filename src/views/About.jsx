import Menu from "../components/Menu";
import BERLIN from "../assets/projects/BERLIN.jpg";
import {motion} from "framer-motion";

const Information = () => {
  const Year = new Date().getFullYear();
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main className="grid place-items-center p-4 lg:h-screen bg-black text-white px-5 font-Montreal">
        <div className="flex flex-col lg:flex-row">
          <section className="pt-12 lg:w-full lg:pt-0 lg:flex lg:justify-between lg:flex-col">
            <p className="text-balance text-3xl lg:text-7xl font-MontrealLight">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aperiam, deleniti velit saepe ab veritatis eos facilis enim, ajdfladjsflñadfj aoisdfj oaisdjf aopdijs
            </p>
            <p className="grid grid-cols-3 grid-rows-2 mt-6 gap-6 text-sm text-pretty lg:gap-40">
              <p><a href="https://whybrand.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline">WHYBRAND</a><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, harum tempora! </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia </p>
            </p>
          </section>
          <section className="text-sm text-right lg:w-2/3 lg:pl-14">
            <img src={BERLIN} alt="profile img" className="h-full" />
            <a href="http://" target="_blank" rel="noopener noreferrer">Linkedin</a><br />
            <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a><br />
            <a href="mailto:">Mail
            </a>
          </section>
        </div>
        <p className="mt-5 text-center text-sm">Copyright © ${Year} Nicolás Dacal - All rights reserved</p>
      </main>
    </motion.div>
  );
};

export default Information;