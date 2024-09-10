import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Footer from "./features/Shared/Footer/Footer";
import OnlineForm from "./pages/Form";

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/onlineform" element={<OnlineForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
