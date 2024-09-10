import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages//Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Faq/Faq";
import Form from "./pages//Form/Form";

import Footer from "./features/Shared/Footer/Footer";

const App = () => {
  const location = useLocation();

  return (
    <BrowserRouter>
      <Routes>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/form" element={<Form />} />
          </Switch>
        </AnimatePresence>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
