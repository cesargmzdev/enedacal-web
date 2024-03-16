import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import About from "./views/About";
import Work from "./views/Work";
import Project from "./views/Project";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/bln" element={<Project project="bln"/>} />
        <Route path="/gom" element={<Project project="gom"/>} />
        {/* <Route path="/mdm" element={<Project />} />
        <Route path="/moml" element={<Project />} />
        <Route path="/rukatype" element={<Project />} />
        <Route path="/schaltbau" element={<Project />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Index;