import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Result from "./pages/Result";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
