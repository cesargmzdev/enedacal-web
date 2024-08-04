import { memo } from "react";
import Menu from "../components/Menu";
import PORTRAIT from "../assets/about/foto_about.webp";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import CV from "/CV_24.pdf?url";

const MotionDiv = memo(({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="flex flex-col min-h-screen"
  >
    {children}
  </motion.div>
));

MotionDiv.displayName = "MotionDiv";

MotionDiv.propTypes = {
  children: PropTypes.node.isRequired,
};

const About = () => {
  return (
    <MotionDiv>
      <Menu />
      <main className="grid place-items-center p-4 bg-black text-white px-5 py-4 font-Montreal lg:pt-20 xl:pt-32 flex-grow">
        <div className="flex flex-col lg:flex-row">
          <section className="pt-12 lg:pt-0 lg:flex lg:justify-between lg:flex-col lg:w-2/3">
            <p className="text-balance text-2xl lg:text-4xl xl:text-5xl font-MontrealLight">
              I AM NICO DACAL, A BERLIN-BASED BRAND &amp; VISUAL DESIGNER. I
              ENJOY BRINGING IDEAS TO LIFE AND CONSIDER MYSELF AS A BRIDGE
              BETWEEN A CLIENT&rsquo;S NEEDS AND THEIR EXTERNAL COMMUNICATION
              THROUGH GRAPHIC SOLUTIONS.
            </p>
            <article className="grid grid-cols-3 grid-rows-2 pt-6 gap-6 text-sm text-pretty lg:gap-20 lg:pt-14">
              <p>
                <a
                  href="https://whybrand.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 hover:underline"
                >
                  WHYBRAND
                </a>
                <br />
                <a
                  className="hover:text-yellow-500 hover:underline duration-300"
                  href="https://www.privatepier.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  P.P.I.
                </a>{" "}
                <br />
                <a
                  className="hover:text-yellow-500 hover:underline duration-300"
                  href="https://knom.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KNOM Design
                </a>{" "}
                <br />
                <a
                  className="hover:text-yellow-500 hover:underline duration-300"
                  href="https://dimad.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIMAD
                </a>{" "}
                <br />
                <a
                  className="hover:text-yellow-500 hover:underline duration-300"
                  href="https://www.frank-ad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frank-ad
                </a>
              </p>
              <p>
                Brand Designer <br />
                Brand Designer <br />
                Junior Designer <br />
                Gr. Designer <br />
                Design Asst
              </p>
              <p>
                2023/24 Berlin <br />
                2021/23 Berlin <br />
                2020 Madrid <br />
                2019 Madrid <br />
                2016 Berlin
              </p>
              <p>
                <a
                  className="hover:text-yellow-500 hover:underline duration-300"
                  href="https://esdmadrid.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ELISAVA
                </a>{" "}
                <br />
                <a
                  className="hover:text-yellow-500 hover:underline duration-300"
                  href="https://weareshifta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E.S.D.
                </a>
              </p>
              <p>
                MA Branding <br />
                BA Design
              </p>
              <p>
                2022/23 Online <br />
                2016/20 Madrid
              </p>
            </article>
          </section>
          <section className="text-sm lg:w-1/3 lg:pl-14 lg:pt-8">
            <img src={PORTRAIT} alt="profile img" />
            <div className="flex justify-between pt-1 text-2xl lg:text-base">
              <a
                href="https://www.linkedin.com/in/nicolasdacal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 hover:underline duration-300"
              >
                LinkedIn
              </a>
              <br />
              <a
                href={CV}
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-500 hover:underline duration-300"
              >
                CV
              </a>
              <br />
              <a
                href="https://www.instagram.com/ene_dacal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 hover:underline duration-300"
              >
                IG
              </a>
              <br />
              <a
                href="mailto:nicodacalgomez@gmail.com"
                className="hover:text-yellow-500 hover:underline duration-300"
              >
                Mail
              </a>
            </div>
          </section>
        </div>
      </main>
      <div className="pb-9 pt-9">
        <Footer />
      </div>
    </MotionDiv>
  );
};

export default About;
