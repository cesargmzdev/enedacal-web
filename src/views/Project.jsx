import { motion } from "framer-motion";
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
import AMRS from "../assets/projects/Desktop/AMRS/AMRS.mp4";
import BST from "../assets/projects/Desktop/BST/BST_logo_home.mp4";
import KPG from "../assets/projects/Mobile/KPG/KPG_work.mp4";

const link = (link, string) => {
  return (
    <a
      className="underline duration-300 hover:text-yellow-500 hover:underline"
      href={`${link}`}
      target="_blank"
      rel="noreferrer"
    >
      {string}
    </a>
  );
};

const getProjectProps = (project) => {
  switch (project) {
    case "bln":
      return {
        title: "BERLIN",
        description: (
          <>
            Seeking for a new visual identity for the city where I live, Berlin,
            I made the following proposal during my Master Studium starting from
            the strategy: simplicity, power and versatility. Translating this
            concepts in to the graphic field, I worked on the 3 most important
            elements: typography, colours and the icon.
          </>
        ),
        src: [
          { type: "video", src: BLN },
          { type: "image", src: BLN_1 },
          { type: "image", src: BLN_2 },
          { type: "image", src: BLN_3 },
          { type: "image", src: BLN_4 },
          { type: "image", src: BLN_5 },
          { type: "image", src: BLN_6 },
          { type: "image", src: BLN_ALLE },
        ],
      };
    case "gom":
      return {
        title: "GOM",
        description: (
          <>
            &quot;Always a leader, never a follower&quot; is being the claim and
            the spirit of Grace O&acute; Malley, the female irish pirate who
            inspired this irish whiskey. During my time at the PPI E-Commerce
            team, I was the most time responsible for the packaging and digital
            campaigns. This Packaging project was designed for a special
            edition. Check{" "}
            {link("https://graceomalleywhiskey.com/", "Grace O´ Malley")}.
          </>
        ),
        src: [
          { type: "image", src: GOM },
          { type: "image", src: GOM_2 },
          { type: "image", src: GOM_3 },
          { type: "image", src: GOM_4 },
          { type: "image", src: GOM_5 },
          { type: "image", src: GOM_6 },
          { type: "image", src: GOM_7 },
        ],
      };

    case "cata":
      return {
        title: "CATA LA LATA (BANCO SABADELL)",
        description: (
          <>
            Design and packaging finalist for the 2020 annual contest of Anfaco
            and Sabadell for the packaging of the cans used in the campaign to
            promote the consumption of canned fish and seafood{" "}
            {link("https://catalalata.com/", "Cata La Lata")}.
          </>
        ),
        src: [
          { type: "image", src: CATA3 },
          { type: "image", src: CATA5 },
          { type: "image", src: CATA1 },
          { type: "image", src: CATA2 },
          { type: "image", src: CATA4 },
          { type: "image", src: CATA0 },
        ],
      };
    case "moml":
      return {
        title: "MOML",
        description: (
          <>
            Motion project for{" "}
            {link(
              "https://knomcreative.com/work/madrid-otra-mirada-literaria-en",
              "Knom",
            )}
            . My role was basically the motion part, animating the static
            concept giving some dynamism to the original idea. The visual
            concept revolved around a letter M (Madrid - Mirada) created from
            the way the spines of the books rest on the shelves. An iconic
            element that captures the essence of the event, linking architecture
            and literature, and that takes different color combinations
            depending on the graphic application.
          </>
        ),
        src: [{ type: "video", src: MOML, className: "h-screen" }],
      };
    case "rukatype":
      return {
        title: "RUKATYPE",
        description: (
          <>
            Rukatype is a typography that highlights the culture and symbology
            of the Mapuche people. This typography generates some mosaics and
            patterns that offer a journey to the origin of the mapuche visual
            culture. Check the {link("https://rukatype.com/", "main project")}.
          </>
        ),
        src: [
          { type: "image", src: RUKATYPE },
          { type: "image", src: RUKATYPE1 },
        ],
      };
    case "schaltbau":
      return {
        title: "SCHALTBAU",
        description: (
          <>
            During my time in {link("https://whybrand.com/", "Whybrand")}, I was
            involved in the Schaltbau rebranding project, being responsible and
            working hand by hand with the strategy- team on the visual identity.
            Innovation, high - quality and reliability were the three pillars on
            which the values and purposes of this industrial company are based.
            Check the rebrand on the{" "}
            {link(
              "https://news.schaltbau.com/schaltbau-launches-sub-brand-for-growth-markets-energy-and-e-mobility",
              "schaltbau website",
            )}
            .
          </>
        ),
        src: [{ type: "image", src: SCHALTBAU }],
      };
    case "amrs":
      return {
        title: "AMRS",
        description: (
          <>
            Motion project for{" "}
            {link(
              "https://knomcreative.com/work/amigos-museo-reina-sofia-en",
              "KNOM",
            )}
            . It was immediately clear that the Foundation needed to create a
            strong community of people who would support art and bring it closer
            to society in order to bring people closer to the Museum. In this
            sense, the Museum and the Foundation should be two sides of the same
            coin, they should be closely related, but their differences should
            also be strengthened. As opposed to the more institutional tone of
            the Museum, the Foundation had to have a social vocation, a
            collective vocation, it had to create an impact. <br /> My role in
            the project was basically turn on the concept to life and focus on
            the motion part.
          </>
        ),
        src: [{ type: "video", src: AMRS }],
      };
    case "bst":
      return {
        title: "BST",
        description: (
          <>
            Nacho Moreno and me worked together and made a Rebrand proposal for
            the Blood banc Banc de Sang i Teixits in Barcelona. The life idea is
            a global concept: on the one hand, it not only collects blood and
            tissue donations. It is also a place driven by a social and
            altruistic good, aimed at helping people who are in extreme medical
            situations. <br /> The concept of life serves as a container or
            umbrella for blood, tissue, breast milk, plasma, and umbilical cord
            donations. And the concept of a house or bank of life evokes that
            physical place where donors gather (“the club of good people”) and
            where they perform those necessary tasks to help save lives. <br />
            <br />
            {link(
              "https://zeroheight.com/52b028991/p/878897-banc-de-sang-i-teixits",
              "Check the full project",
            )}
          </>
        ),
        src: [{ type: "video", src: BST }],
      };
    case "kpg":
      return {
        title: "KPG (WHYBRAND) - UX/UI Design",
        description: (
          <>
            Another project I was involved in during my time in Whybrand was the
            redesign of the KPG-rs website. This client specializes in the
            design and engineering of drives and generators, encompassing
            precision manufacturing of components and gearboxes, as well as
            maintenance and service. <br /> <br /> My role in this project was
            primarily focused on crafting the UX/UI design, ensuring the
            website&rsquo;s adaptability across various formats and
            incorporating responsive breakpoints to guarantee optimal
            functionality on all current digital devices. <br /> <br /> Here is
            the current{" "}
            {link(
              "https://zeroheight.com/52b028991/p/878897-banc-de-sang-i-teixits",
              "website",
            )}
            .
          </>
        ),
        src: [{ type: "video", src: KPG, className: "h-screen" }],
      };
  }
};

const Project = (props) => {
  const projectProps = getProjectProps(props.project);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Menu />
      <main className="bg-black text-white">
        <section className="p-5 py-10 pt-16 font-MontrealLight">
          <p className="pb-9 text-2xl underline md:text-base">
            {projectProps.title}
          </p>
          <p className="text-balance text-2xl lg:w-[50%] lg:text-base">
            {projectProps.description}
          </p>
        </section>
        <section>
          {projectProps.src.map((src, index) => {
            const isLastItem = index === projectProps.src.length - 1;
            const lastItemClass = isLastItem ? "" : "pb-4";

            if (src.type === "video") {
              return (
                <article
                  key={index}
                  className={`flex flex-col ${lastItemClass}`}
                >
                  <video
                    src={src.src}
                    alt={`project ${projectProps.title}`}
                    autoPlay
                    loop
                    muted
                    className={src.className}
                  />
                </article>
              );
            } else {
              return (
                <article
                  key={index}
                  className={`flex flex-col ${lastItemClass}`}
                >
                  <img
                    src={src.src}
                    alt={`project ${projectProps.title}`}
                    className={src.className}
                  />
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
