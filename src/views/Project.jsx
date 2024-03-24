import {motion} from "framer-motion";
import Menu from "../components/Menu";
import PropTypes from "prop-types";
import BLN from "../assets/projects/Desktop/BLN/BLN_home_anim.mp4";
import BLN_1 from "../assets/projects/Desktop/BLN/BLN_1.webp";
import BLN_2 from "../assets/projects/Desktop/BLN/BLN_2.webp";
import BLN_3 from "../assets/projects/Desktop/BLN/BLN_3.webp";
import BLN_4 from "../assets/projects/Desktop/BLN/BLN_4.webp";
import BLN_5 from "../assets/projects/Desktop/BLN/BLN_5.webp";
import BLN_6 from "../assets/projects/Desktop/BLN/BLN_6.webp";
import BLN_ALLE from "../assets/projects/Desktop/BLN/bln_alle.webp";
import GOM from "../assets/projects/Desktop/GOM/GOM_home.gif";
import GOM_2 from "../assets/projects/Desktop/GOM/GOM_2.webp";
import GOM_3 from "../assets/projects/Desktop/GOM/GOM_3.webp";
import GOM_4 from "../assets/projects/Desktop/GOM/GOM_4.webp";
import GOM_5 from "../assets/projects/Desktop/GOM/GOM_5.webp";
import GOM_6 from "../assets/projects/Desktop/GOM/GOM_6.webp";
import GOM_7 from "../assets/projects/Desktop/GOM/GOM_7.webp";
import CATA0 from "../assets/projects/Desktop/CATA/cata0.webp";
import CATA1 from "../assets/projects/Desktop/CATA/cata1.webp";
import CATA2 from "../assets/projects/Desktop/CATA/cata2.webp";
import CATA3 from "../assets/projects/Desktop/CATA/cata3.webp";
import CATA4 from "../assets/projects/Desktop/CATA/cata4.webp";
import CATA5 from "../assets/projects/Desktop/CATA/cata5.webp";
import MOML from "../assets/projects/Desktop/MOML/knom.mp4";
import RUKATYPE1 from "../assets/projects/Mobile/RUKATYPE/rukaflag.webp";
import RUKATYPE from "../assets/projects/Desktop/RUKATYPE/RUKATYPE_home.webp";
import SCHALTBAU from "../assets/projects/Desktop/SCHALTBAU/SB_home.webp";

const link = (link, string) => {
  return <a className="underline hover:text-yellow-500 hover:underline duration-300" href={`${link}`} target="_blank" rel="noreferrer">{string}</a>;
};

const getProjectProps = (project) => {

  switch (project) {
    case "bln":
      return {
        title: "BERLIN",
        description: (
          <>
            Seeking for a new visual identity for the city where I live, Berlin, I made the following proposal during my Master Studium starting from the strategy: simplicity, power and versatility. Translating this concepts in to the graphic field, I worked on the 3 most important elements: typography, colours and the icon.
          </>
        ),
        src: [
          {type: 'video', src: BLN},
          {type: 'image', src: BLN_1},
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
        description: (
          <>
            &quot;Always a leader, never a follower&quot; is being the claim and the spirit of Grace O´ Malley, the female irish pirate who inspired this irish whiskey.  During my time at the PPI E-Commerce team, I was the most time responsible for the packaging and digital campaigns. This Packaging project was designed for a special edition. Check {link("https://graceomalleywhiskey.com/", "Grace O´ Malley")}.
          </>
        ),
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


    case "cata":
      return {
        title: "CATA LA LATA (BANCO SABADELL)",
        description: (
          <>
            Design and packaging finalist for the 2020 annual contest of Anfaco and Sabadell for the packaging of the cans used in the campaign to promote the consumption of canned fish and seafood {link("https://catalalata.com/", "Cata La Lata")}.
          </>
        ),
        src: [
          {type: 'image', src: CATA0},
          {type: 'image', src: CATA1},
          {type: 'image', src: CATA2},
          {type: 'image', src: CATA3},
          {type: 'image', src: CATA4},
          {type: 'image', src: CATA5}
        ]
      };
    case "moml":
      return {
        title: "MOML",
        description: (
          <>
            Motion project for {link("https://knomcreative.com/work/madrid-otra-mirada-literaria-en", "Knom")}. My role was basically the motion part, animating the static concept giving some dynamism to the original idea. The visual concept revolved around a letter M (Madrid - Mirada) created from the way the spines of the books rest on the shelves. An iconic element that captures the essence of the event, linking architecture and literature, and that takes different color combinations depending on the graphic application.
          </>
        ),
        src: [
          {type: 'video', src: MOML, className: "h-screen"}
        ]
      };
    case "rukatype":
      return {
        title: "RUKATYPE",
        description: (
          <>
            Rukatype is a typography that highlights the culture and symbology of the Mapuche people. This typography generates some mosaics and patterns that offer a journey to the origin of the mapuche visual culture. Check the {link("https://rukatype.com/", "main project")}.
          </>
        ),
        src: [
          {type: 'image', src: RUKATYPE},
          {type: 'image', src: RUKATYPE1}
        ]
      };
    case "schaltbau":
      return {
        title: "SCHALTBAU",
        description: (<>
          During my time in {link("https://whybrand.com/", "Whybrand")}, I was involved in the Schaltbau rebranding project, being responsible and working hand by hand with the strategy- team on the visual identity. Innovation, high - quality and reliability were the three pillars on which the values and purposes of this industrial company are based. Check the rebrand on the {link("https://news.schaltbau.com/schaltbau-launches-sub-brand-for-growth-markets-energy-and-e-mobility", "schaltbau website")}.
        </>
        ),
        src: [
          {type: 'image', src: SCHALTBAU}
        ]
      };
  }
};

const Project = (props) => {
  const projectProps = getProjectProps(props.project);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main className="bg-black text-white">
        <section className="p-5 py-10 pt-16 font-MontrealLight">
          <p className="underline pb-9 text-2xl md:text-base">{projectProps.title}</p>
          <p className="text-2xl lg:text-base lg:w-[50%] text-balance">
            {projectProps.description}
          </p>
        </section>
        <section>
          {projectProps.src.map((src, index) => {
            const isLastItem = index === projectProps.src.length - 1;
            const lastItemClass = isLastItem ? '' : 'pb-4';

            if (src.type === 'video') {
              return (
                <article key={index} className={`flex flex-col ${lastItemClass}`}>
                  <video src={src.src} alt={`project ${projectProps.title}`} autoPlay loop muted className={src.className} />
                </article>
              );
            } else {
              return (
                <article key={index} className={`flex flex-col ${lastItemClass}`}>
                  <img src={src.src} alt={`project ${projectProps.title}`} className={src.className} />
                </article>
              );
            }
          })}
        </section>
      </main>
    </motion.div>
  );
};

Project.propTypes = {
  project: PropTypes.string.isRequired,
};

export default Project;