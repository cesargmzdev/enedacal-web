import { useState, useEffect, useCallback } from "react";
import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BLN from "../assets/projects/Mobile/BLN/BLN_anim_work.mp4";
import GOM from "../assets/projects/Mobile/GOM/GOM_work.gif";
import CATA from "../assets/projects/Mobile/CATA/cata_work.webp";
import MOML from "../assets/projects/Mobile/MOML/MOML_anim.mp4";
import RUKATYPE from "../assets/projects/Mobile/RUKATYPE/RUKATYPE_work.webp";
import SCHALTBAU from "../assets/projects/Mobile/SCHALTBAU/SB_work.webp";
import AMRS from "../assets/projects/Mobile/AMRS/AMRS_work.webp";
import BST from "../assets/projects/Mobile/BST/BST_work.mp4";

const Work = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = useCallback(() => {
    setProjects([
      {
        path: "/rukatype",
        src: RUKATYPE,
        alt: "RUKATYPE",
        title: "RUKATYPE - Typography",
      },
      {
        path: "/schaltbau",
        src: SCHALTBAU,
        alt: "SCHALTBAU Project",
        title: "SCHALTBAU (WHYBRAND) - Rebrand",
      },
      {
        path: "/bst",
        src: BST,
        alt: "BST Project",
        title: "BST - Rebrand",
        isVideo: true,
      },
      {
        path: "/moml",
        src: MOML,
        alt: "MOML Project",
        title: "MOML (KNOM) - Motion Graph",
        isVideo: true,
      },
      {
        path: "/gom",
        src: GOM,
        alt: "GOM Project",
        title: "GOM (PPI) - Packaging",
      },
      {
        path: "/bln",
        src: BLN,
        alt: "BLN Project",
        title: "BLN - Rebrand",
        isVideo: true,
      },
      {
        path: "/cata",
        src: CATA,
        alt: "CATA Project",
        title: "CATA LA LATA - Packaging",
      },
      {
        path: "/amrs",
        src: AMRS,
        alt: "AMRS Project",
        title: "AMRS (KNOM) - Motion Graph",
      },
    ]);
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Menu />
      <main className="bg-black px-5 pt-20 font-Montreal text-white lg:grid lg:grid-cols-3 lg:gap-3 lg:pt-[7.5rem]">
        {projects.map((project) => (
          <Link to={project.path} key={project.title}>
            <ProjectCard
              src={project.src}
              alt={project.alt}
              title={project.title}
              isVideo={project.isVideo}
              article_classNames={project.article_classNames}
              media_classNames={project.media_classNames}
            />
          </Link>
        ))}
      </main>
      <Footer classNames="pt-9 pb-9" />
    </motion.div>
  );
};

export default Work;
