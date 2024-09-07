import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Header from "./features/Shared/Header/Header";
// import LoaderWithContent from "./features/Shared/Loader/LoaderWithContent";
import Footer from "./features/Shared/Footer/Footer";
import OnlineForm from "./pages/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Envelopper chaque route avec LoaderWithContent */}
        <Route
          path="/"
          element={
            // <LoaderWithContent>
              <Home />
            // </LoaderWithContent>
          }
        />
        <Route
          path="/about"
          element={
            // <LoaderWithContent>
              <About />
            // </LoaderWithContent>
          }
        />
        <Route
          path="/contact"
          element={
            // <LoaderWithContent>
              <Contact />
            // </LoaderWithContent>
          }
        />
        <Route
          path="/faq"
          element={
            // <LoaderWithContent>
              <Faq />
            // </LoaderWithContent>
          }
        />
        <Route
          path="/onlineform"
          element={
            // <LoaderWithContent>
              <OnlineForm />
            // </LoaderWithContent>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
