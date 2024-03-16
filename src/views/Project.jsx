import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Menu from "../components/Menu";
import PropTypes from "prop-types";
import ProjectCarousel from "../components/ProjectCarousel";
import BLN from "../assets/projects/Desktop/BLN/BLN_home_anim.mp4";
import BLN_2 from "../assets/projects/Desktop/BLN/BLN_2.jpeg";
import BLN_3 from "../assets/projects/Desktop/BLN/BLN_3.jpeg";
import BLN_4 from "../assets/projects/Desktop/BLN/BLN_4.jpeg";
import BLN_5 from "../assets/projects/Desktop/BLN/BLN_5.jpeg";
import BLN_6 from "../assets/projects/Desktop/BLN/BLN_6.jpeg";
import BLN_ALLE from "../assets/projects/Desktop/BLN/bln_alle.jpg";
import GOM from "../assets/projects/Desktop/GOM/GOM_home.gif";
import GOM_2 from "../assets/projects/Desktop/GOM/GOM_2.jpg";
import GOM_3 from "../assets/projects/Desktop/GOM/GOM_3.jpg";
import GOM_4 from "../assets/projects/Desktop/GOM/GOM_4.jpg";
import GOM_5 from "../assets/projects/Desktop/GOM/GOM_5.jpg";
import GOM_6 from "../assets/projects/Desktop/GOM/GOM_6.jpg";
import GOM_7 from "../assets/projects/Desktop/GOM/GOM_7.jpg";
import CarouselCursor from "../components/subcomponents/CarouselCursor";

const getProjectProps = (project) => {
  switch (project) {
    case "bln":
      return {
        title: "BERLIN",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt corrupti odit reprehenderit tempora corporis assumenda debitis quas animi consectetur! Officiis eaque exercitationem quasi quidem corporis corrupti! Error explicabo unde molestias.",
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo pariatur nemo perspiciatis ex, ipsam itaque incidunt quis, earum suscipit at velit saepe! Velit adipisci cupiditate nobis at consectetur animi corrupti!",
        src: [
          {type: 'video', src: BLN},
          {type: 'image', src: BLN_2},
          {type: 'image', src: BLN_3},
          {type: 'image', src: BLN_4},
          {type: 'image', src: BLN_5},
          {type: 'image', src: BLN_6},
          {type: 'image', src: BLN_ALLE}
        ]
      };
    case "gom":
      return {
        title: "GOM",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt corrupti odit reprehenderit tempora corporis assumenda debitis quas animi consectetur! Officiis eaque exercitationem quasi quidem corporis corrupti! Error explicabo unde molestias.",
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo pariatur nemo perspiciatis ex, ipsam itaque incidunt quis, earum suscipit at velit saepe! Velit adipisci cupiditate nobis at consectetur animi corrupti!",
        src: [
          {type: 'image', src: GOM},
          {type: 'image', src: GOM_2},
          {type: 'image', src: GOM_3},
          {type: 'image', src: GOM_4},
          {type: 'image', src: GOM_5},
          {type: 'image', src: GOM_6},
          {type: 'image', src: GOM_7}
        ]
      };
  }
};

const Project = (props) => {
  const projectProps = getProjectProps(props.project);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    const handleMouseMove = (event) => {
      setDirection(event.clientX > window.innerWidth / 2 ? 'right' : 'left');
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main className="bg-black text-white">
        <section className="p-5 pt-16 font-MontrealLight">
          <p className="underline pb-4">{projectProps.title}</p>
          <div className="lg:inline-flex gap-x-7">
            <p className="text-balance">
              {projectProps.description}
            </p>
            <p className="mt-8 lg:mt-0 text-balance pb-5">
              {projectProps.details}
            </p>
          </div>
        </section>
        <section className="h-screen">
          <CarouselCursor direction={direction} />
          <ProjectCarousel slides={projectProps.src} />
        </section>
      </main>
    </motion.div>
  );
};

Project.propTypes = {
  project: PropTypes.string.isRequired,
};

export default Project;