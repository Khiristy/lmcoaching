import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages//Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Faq/Faq";
import Form from "./pages//Form/Form";

import Footer from "./features/Shared/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/onlineform" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
