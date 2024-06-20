import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './styles/reset.scss';
import './styles/main.scss';
import './styles/mixins.scss';

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