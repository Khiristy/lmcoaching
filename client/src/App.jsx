import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Result from "./pages/Result";

import OnlineForm from "./pages/Form";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/result" element={<Result />} />

        <Route path="/OnlineForm" element={<OnlineForm />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
