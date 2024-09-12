// import React from 'react'; // Add this line
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/mixins.scss";

export default function Root() {
  return (
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Root />);
