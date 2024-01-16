import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import BERLIN from "../assets/projects/BERLIN.jpg";
import GOM from "../assets/projects/GOM.gif";
import MDM from "../assets/projects/MDM.gif";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Work = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}} className="">
      <Menu />
      <main className="bg-black text-white px-5 font-Montreal pt-14 lg:grid lg:grid-cols-3 lg:gap-3">
        <Link to={'/berlin'}>
          <ProjectCard img={BERLIN} title="BERLIN" description="description about berlin" />
        </Link>
        <Link to={'/gom'}>
          <ProjectCard img={GOM} title="GOM" description="description about GOM" />
        </Link>
        <Link to={'/mdm'}>
          <ProjectCard img={MDM} title="MDM" description="description about MDM" />
        </Link>
      </main>
    </motion.div>
  );
};

export default Work;