import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/reset.scss";
import "./assets/styles/main.scss";
import "./assets/styles/mixins.scss";

export default function Root() {
  return (
    // <React.StrictMode>
      <App />
    // </React.StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Root />);