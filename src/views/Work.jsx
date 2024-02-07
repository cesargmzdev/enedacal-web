import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import BERLIN from "../assets/projects/BERLIN.jpg";
import GOM from "../assets/projects/GOM.gif";
import MDM from "../assets/projects/MDM.gif";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import video_test from "../assets/projects/video_test.mp4";

const Work = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}} className="">
      <Menu />
      <main className="bg-black text-white px-5 font-Montreal pt-32 lg:grid lg:grid-cols-3 lg:gap-3 lg:pt-[7.5rem]">
        <Link to={'/berlin'}>
          <ProjectCard src={video_test} alt="video" title={'hola'} isVideo={true} />
        </Link>
        <Link to={'/gom'}>
          <ProjectCard src={GOM} title="GOM" />
        </Link>
        <Link to={'/mdm'}>
          <ProjectCard src={MDM} title="MDM" />
        </Link>
        <Link to={'/berlin'}>
          <ProjectCard src={BERLIN} title="BERLIN" />
        </Link>
        <Link to={'/gom'}>
          <ProjectCard src={GOM} title="GOM" />
        </Link>
        <Link to={'/mdm'}>
          <ProjectCard src={MDM} title="MDM" />
        </Link>
      </main>
    </motion.div>
  );
};

export default Work;