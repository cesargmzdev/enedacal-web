import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import BERLIN from "../assets/projects/BERLIN.jpg";
import GOM from "../assets/projects/GOM.gif";
import MDM from "../assets/projects/MDM.gif";
import {motion} from "framer-motion";

const Work = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}} className="">
      <Menu />
      <main className="bg-black text-white px-8 font-Montreal pt-14 lg:grid lg:grid-cols-3 lg:gap-10">
        <ProjectCard img={BERLIN} title="BERLIN" description="description about berlin" />
        <ProjectCard img={GOM} title="GOM" description="description about GOM" />
        <ProjectCard img={MDM} title="MDM" description="description about MDM" />
        <ProjectCard img={BERLIN} title="BERLIN" description="description about berlin" />
        <ProjectCard img={GOM} title="GOM" description="description about GOM" />
        <ProjectCard img={MDM} title="MDM" description="description about MDM" />
      </main>
    </motion.div>
  );
};

export default Work;