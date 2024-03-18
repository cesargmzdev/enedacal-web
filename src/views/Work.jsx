import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import BLN from "../assets/projects/Mobile/BLN/BLN_anim_work.mp4";
import GOM from "../assets/projects/Mobile/GOM/GOM_work.gif";
import MDM from "../assets/projects/Mobile/MDM/m_proyecto_work.gif";
import MOML from "../assets/projects/Mobile/MOML/MOML_anim.mp4";
import RUKATYPE from "../assets/projects/Mobile/RUKATYPE/RUKATYPE_work.png";
import SCHALTBAU from "../assets/projects/Mobile/SCHALTBAU/SB_work.png";
import Footer from "../components/Footer";

const Work = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main className="bg-black text-white px-5 font-Montreal pt-20 lg:grid lg:grid-cols-3 lg:gap-3 lg:pt-[7.5rem]">
        <Link to={'/bln'}>
          <ProjectCard src={BLN} alt="BLN Project" title="BLN" isVideo={true} />
        </Link>
        <Link to={'/gom'}>
          <ProjectCard src={GOM} alt="GOM Project" title="GOM (PPI)" />
        </Link>
        <Link to={'/mdm'}>
          <ProjectCard src={MDM} alt="MDM Project" title="MADM" />
        </Link>
        <Link to={'/moml'}>
          <ProjectCard src={MOML} alt="MOML Project" title="MOML (KNOM)" isVideo={true} />
        </Link>
        <Link to={'/rukatype'}>
          <ProjectCard src={RUKATYPE} alt="RUKATYPE" title="RUKATYPE" />
        </Link>
        <Link to={'/schaltbau'}>
          <ProjectCard src={SCHALTBAU} alt="SCHALTBAU Project" title="SCHALTBAU (WHYBRAND)" />
        </Link>
      </main>
      <Footer classNames="pt-9 pb-9" />
    </motion.div>
  );
};

export default Work;