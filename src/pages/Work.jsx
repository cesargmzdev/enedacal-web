import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import BERLIN from "../assets/projects/BERLIN.jpg";
import GOM from "../assets/projects/GOM.gif";
import MDM from "../assets/projects/MDM.gif";

const Work = () => {
  return (
    <>
      <Menu />
      <section className="bg-black text-white font-Montreal grid grid-cols-3 p-20 gap-x-10">
        <ProjectCard img={BERLIN} title="BERLIN" description="description about berlin" />
        <ProjectCard img={GOM} title="GOM" description="description about GOM" />
        <ProjectCard img={MDM} title="MDM" description="description about MDM" />
        <ProjectCard img={MDM} title="MDM" description="description about MDM" />
      </section>
    </>
  );
};

export default Work;