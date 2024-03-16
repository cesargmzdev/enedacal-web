import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import BLN from "../assets/projects/Desktop/BLN/BLN_home_anim.mp4";
import GOM from "../assets/projects/Desktop/GOM/GOM_home.gif";
import MDM from "../assets/projects/Desktop/MDM/MDM_home.gif";
import MOML from "../assets/projects/Desktop/MOML/knom.mp4";
import RUKATYPE from "../assets/projects/Desktop/RUKATYPE/RUKATYPE_home.jpg";
import SCHALTBAU from "../assets/projects/Desktop/SCHALTBAU/SB_home.png";

const Work = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main className="bg-black text-white px-5 font-Montreal pt-32 lg:grid lg:grid-cols-3 lg:gap-3 lg:pt-[7.5rem]">
        <Link to={'/bln'}>
          <ProjectCard src={BLN} alt="BLN Project" title="BLN" isVideo={true} />
        </Link>
        <Link to={'/gom'}>
          <ProjectCard src={GOM} alt="GOM Project" title="GOM" />
        </Link>
        <Link to={'/mdm'}>
          <ProjectCard src={MDM} alt="MDM Project" title="MDM" />
        </Link>
        <Link to={'/moml'}>
          <ProjectCard src={MOML} alt="MOML Project" title="MOML" isVideo={true} />
        </Link>
        <Link to={'/rukatype'}>
          <ProjectCard src={RUKATYPE} alt="RUKATYPE" title="RUKATYPE" />
        </Link>
        <Link to={'/schaltbau'}>
          <ProjectCard src={SCHALTBAU} alt="SCHALTBAU Project" title="SCHALTBAU" />
        </Link>
      </main>
    </motion.div>
  );
};

export default Work;