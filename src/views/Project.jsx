import {motion} from "framer-motion";
import Menu from "../components/Menu";
import PropTypes from "prop-types";

const Project = (props) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main className="bg-black text-white">
        <section className="h-screen">
          <img src={props.img} alt="BERLIN" className="h-full w-full" />
        </section>
        <section className="p-5 font-MontrealLight">
          <p className="underline">{props.title}</p>
          <div className="lg:inline-flex gap-x-7">
            <p className="text-balance">
              {props.description}
            </p>
            <p className="mt-8 lg:mt-0 text-balance">
              {props.details}
            </p>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

Project.propTypes = {
  img: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Project;