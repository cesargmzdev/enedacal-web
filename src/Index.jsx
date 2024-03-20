import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import About from "./views/About";
import Work from "./views/Work";
import Project from "./views/Project";
import ScrollToTop from "./utils/ScrollToTop";

const Index = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/bln" element={<Project project="bln" />} />
        <Route path="/gom" element={<Project project="gom" />} />
        <Route path="/cata" element={<Project project="cata" />} />
        <Route path="/moml" element={<Project project="moml" />} />
        <Route path="/rukatype" element={<Project project="rukatype" />} />
        <Route path="/schaltbau" element={<Project project="schaltbau" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;