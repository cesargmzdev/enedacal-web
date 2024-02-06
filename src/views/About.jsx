import Menu from "../components/Menu";
import PORTRAIT from "../assets/Information/portrait.jpg";
import {motion} from "framer-motion";

const Information = () => {
  const Year = new Date().getFullYear();
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
      <Menu />
      <main className="grid place-items-center p-4 lg:h-screen bg-black text-white px-5 py-4 font-Montreal">
        <div className="flex flex-col lg:flex-row lg:h-4/5">
          <section className="pt-12  lg:pt-0 lg:flex lg:justify-between lg:flex-col lg:w-2/3">
            <p className="text-balance text-3xl lg:text-6xl font-MontrealLight">
              I AM NICO DACAL, A BERLIN-BASED BRAND & VISUAL DESIGNER WITH A CREATIVE MIND AND A PRAGMATIC APPROACH TO USABILITY ISSUES.
              I ENJOY BRINGING IDEAS TO LIFE.            </p>
            <p className="grid grid-cols-3 grid-rows-2 mt-6 gap-6 text-sm text-pretty lg:gap-20 lg:mt-36">
              <p><a href="https://whybrand.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 hover:underline">WHYBRAND</a><br />
                <a className="hover:text-yellow-500 hover:underline duration-300" href="https://www.privatepier.com/" target="_blank" rel="noopener noreferrer">P.P.I.
                </a> <br />
                <a className="hover:text-yellow-500 hover:underline duration-300" href="https://knom.es/" target="_blank" rel="noopener noreferrer">KNOM Design
                </a> <br />
                <a className="hover:text-yellow-500 hover:underline duration-300" href="https://dimad.org/en/" target="_blank" rel="noopener noreferrer">DIMAD
                </a> <br />
                <a className="hover:text-yellow-500 hover:underline duration-300" href="https://www.frank-ad.com/" target="_blank" rel="noopener noreferrer">Frank-ad
                </a>
              </p>
              <p>Brand Designer <br />
                Brand Designer <br />
                Junior Designer <br />
                Gr. Designer <br />
                Design Asst
              </p>
              <p>2023/now Berlin <br />
                2021/22 Berlin <br />
                2020 Madrid <br />
                2019 Madrid <br />
                2016 Berlin
              </p>
              <p><a className="hover:text-yellow-500 hover:underline duration-300" href="https://esdmadrid.es/" target="_blank" rel="noopener noreferrer">SHIFTA by ELISAVA
              </a> <br />
                <a className="hover:text-yellow-500 hover:underline duration-300" href="https://weareshifta.com/" target="_blank" rel="noopener noreferrer">E.S.D.
                </a>
              </p>
              <p>Master in Branding <br />
                Bachelor of Arts
              </p>
              <p>2022/23 Online <br />
                2016/2020 Madrid</p>
            </p>
          </section>
          <section className="text-sm lg:w-1/3 lg lg:pl-14">
            <img src={PORTRAIT} alt="profile img" className="h-full lg:w-full" />
            <div className="flex justify-between pt-1">
              <a href="https://www.linkedin.com/in/nicolasdacal/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 hover:underline duration-300">LinkedIn</a><br />
              <a href="https://www.instagram.com/ene_dacal/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 hover:underline duration-300">Instagram</a><br />
              <a href="mailto:nicodacalgomez@gmail.com" className="hover:text-yellow-500 hover:underline duration-300">Mail
              </a>
            </ div>
          </section>
        </div>
        <p className="mt-3 mb-9 text-center text-sm lg:mb-0 lg:absolute lg:bottom-5">Copyright © {Year} Nicolás Dacal - All rights reserved</p>
      </main>
    </motion.div>
  );
};

export default Information;