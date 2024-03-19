import {useState, useEffect} from "react";
import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const {default: BLN} = await import("../assets/projects/Mobile/BLN/BLN_anim_work.mp4");
      const {default: GOM} = await import("../assets/projects/Mobile/GOM/GOM_work.gif");
      const {default: MDM} = await import("../assets/projects/Mobile/MDM/m_proyecto_work.gif");
      const {default: MOML} = await import("../assets/projects/Mobile/MOML/MOML_anim.mp4");
      const {default: RUKATYPE} = await import("../assets/projects/Mobile/RUKATYPE/RUKATYPE_work.webp");
      const {default: SCHALTBAU} = await import("../assets/projects/Mobile/SCHALTBAU/SB_work.webp");

      setProjects([
        {path: '/bln', src: BLN, alt: "BLN Project", title: "BLN", isVideo: true},
        {path: '/gom', src: GOM, alt: "GOM Project", title: "GOM (PPI)"},
        {path: '/mdm', src: MDM, alt: "MDM Project", title: "MADM"},
        {path: '/moml', src: MOML, alt: "MOML Project", title: "MOML (KNOM)", isVideo: true},
        {path: '/rukatype', src: RUKATYPE, alt: "RUKATYPE", title: "RUKATYPE"},
        {path: '/schaltbau', src: SCHALTBAU, alt: "SCHALTBAU Project", title: "SCHALTBAU (WHYBRAND)"}
      ]);
    };

    loadProjects();
  }, []);

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