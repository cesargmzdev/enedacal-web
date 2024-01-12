import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Information from "./pages/Information";
import Work from "./pages/Work";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path="/about" element={<Information />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;