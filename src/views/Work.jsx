import {useState, useEffect, useCallback} from "react";
import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import BLN from "../assets/projects/Mobile/BLN/BLN_anim_work.mp4";
import GOM from "../assets/projects/Mobile/GOM/GOM_work.gif";
import CATA from "../assets/projects/Mobile/CATA/cata_work.webp";
import MOML from "../assets/projects/Mobile/MOML/MOML_anim.mp4";
import RUKATYPE from "../assets/projects/Mobile/RUKATYPE/RUKATYPE_work.webp";
import SCHALTBAU from "../assets/projects/Mobile/SCHALTBAU/SB_work.webp";

const Work = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = useCallback(() => {
    setProjects([
      {path: '/bln', src: BLN, alt: "BLN Project", title: "BLN - Rebrand", isVideo: true},
      {
        path: '/rukatype', src: RUKATYPE, alt: "RUKATYPE", title: "RUKATYPE - Typography"
      },
      {path: '/cata', src: CATA, alt: "CATA Project", title: "CATA LA LATA - Packaging"},
      {
        path: '/moml', src: MOML, alt: "MOML Project", title: "MOML (KNOM) - Motion Graph", isVideo: true
      },
      {path: '/gom', src: GOM, alt: "GOM Project", title: "GOM (PPI) - Packaging"},
      {path: '/schaltbau', src: SCHALTBAU, alt: "SCHALTBAU Project", title: "SCHALTBAU (WHYBRAND) - Rebrand"}
    ]);
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main className="bg-black text-white px-5 font-Montreal pt-20 lg:grid lg:grid-cols-3 lg:gap-3 lg:pt-[7.5rem]">
        {projects.map(project => (
          <Link to={project.path} key={project.title}>
            <ProjectCard src={project.src} alt={project.alt} title={project.title} isVideo={project.isVideo} />
          </Link>
        ))}
      </main>
      <Footer classNames="pt-9 pb-9" />
    </motion.div>
  );
};

export default Work;