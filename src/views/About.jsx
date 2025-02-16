import { memo } from "react";
import Menu from "../components/Menu";
import PORTRAIT from "../assets/about/foto_about2.webp";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import CV from "/CV_24.pdf?url";

const MotionDiv = memo(({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="flex min-h-screen flex-col"
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
      <main className="grid flex-grow place-items-center bg-black p-4 px-5 py-4 font-Montreal text-white lg:pt-20 xl:pt-32">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <section className="pt-12 lg:flex lg:w-2/3 lg:flex-col lg:justify-between lg:pt-0">
            <p className="text-balance font-MontrealLight text-2xl lg:text-4xl xl:text-5xl">
              I am Nico Dacal, a Berlin-based brand designer with UX/UI
              expertise. With a strong background in branding studios, I craft
              visual solutions that connect client needs with impactful design.{" "}
              <br />
              Focused on user-centered experiences, I blend strategy and
              creativity to solve problems through thoughtful, engaging, and
              effective design.
            </p>
            <div className="grid grid-cols-3 grid-rows-2 gap-6 text-pretty pt-14 text-xs lg:gap-20 lg:pt-14 lg:text-base">
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
                  className="duration-300 hover:text-yellow-500 hover:underline"
                  href="https://www.privatepier.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  P.P.I.
                </a>{" "}
                <br />
                <a
                  className="duration-300 hover:text-yellow-500 hover:underline"
                  href="https://knom.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KNOM Design
                </a>{" "}
                <br />
                <a
                  className="duration-300 hover:text-yellow-500 hover:underline"
                  href="https://dimad.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIMAD
                </a>{" "}
                <br />
                <a
                  className="duration-300 hover:text-yellow-500 hover:underline"
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
              <p className="flex flex-col lg:justify-end">
                <a
                  className="hidden duration-300 hover:text-yellow-500 hover:underline lg:block"
                  href="https://www.spiced-academy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SPICED Academy
                </a>
                <a
                  className="duration-300 hover:text-yellow-500 hover:underline lg:hidden"
                  href="https://www.spiced-academy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SPICED
                </a>
                <a
                  className="duration-300 hover:text-yellow-500 hover:underline"
                  href="https://esdmadrid.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ELISAVA
                </a>
                <a
                  className="duration-300 hover:text-yellow-500 hover:underline"
                  href="https://weareshifta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E.S.D.
                </a>
              </p>
              <p className="lg:flex lg:flex-col lg:justify-end">
                UX/UI Bootcamp <br />
                MA Branding <br />
                BA Design
              </p>
              <p className="lg:flex lg:flex-col lg:justify-end">
                2024/25 Berlin <br />
                2022/23 Online <br />
                2016/20 Madrid
              </p>
            </div>
          </section>
          <section>
            <img
              src={PORTRAIT}
              alt="profile img"
              className="w-[600px] rounded-lg"
            />
            <div className="flex justify-between pt-1 lg:text-base">
              <a
                href="https://www.linkedin.com/in/nicolasdacal/"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 hover:text-yellow-500 hover:underline"
              >
                LinkedIn
              </a>
              <br />
              <a
                href={CV}
                target="_blank"
                rel="noreferrer"
                className="duration-300 hover:text-yellow-500 hover:underline"
              >
                CV
              </a>
              <br />
              <a
                href="mailto:nicodacalgomez@gmail.com"
                className="duration-300 hover:text-yellow-500 hover:underline"
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
