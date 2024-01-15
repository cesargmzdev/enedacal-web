import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import About from "./views/About";
import Work from "./views/Work";
import Project from "./views/Project";
import BERLIN from "././assets/projects/BERLIN.jpg";
import GOM from "./assets/projects/GOM.gif";
import MDM from "./assets/projects/MDM.gif";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/berlin" element={<Project img={BERLIN} title="BERLIN" description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt corrupti odit reprehenderit tempora corporis assumenda debitis quas animi consectetur! Officiis eaque exercitationem quasi quidem corporis corrupti! Error explicabo unde molestias.' details='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo pariatur nemo perspiciatis ex, ipsam itaque incidunt quis, earum suscipit at velit saepe! Velit adipisci cupiditate nobis at consectetur animi corrupti!' />} />
        <Route path="/GOM" element={<Project img={GOM} title="GOM" description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt corrupti odit reprehenderit tempora corporis assumenda debitis quas animi consectetur! Officiis eaque exercitationem quasi quidem corporis corrupti! Error explicabo unde molestias.' details='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo pariatur nemo perspiciatis ex, ipsam itaque incidunt quis, earum suscipit at velit saepe! Velit adipisci cupiditate nobis at consectetur animi corrupti!' />} />
        <Route path="/MDM" element={<Project img={MDM} title="MDM" description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt corrupti odit reprehenderit tempora corporis assumenda debitis quas animi consectetur! Officiis eaque exercitationem quasi quidem corporis corrupti! Error explicabo unde molestias.' details='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo pariatur nemo perspiciatis ex, ipsam itaque incidunt quis, earum suscipit at velit saepe! Velit adipisci cupiditate nobis at consectetur animi corrupti!' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;