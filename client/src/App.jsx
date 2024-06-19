import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header.jsx";
import Footer from "./assets/components/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
