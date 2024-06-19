import ReactDOM from "react-dom";

import App from "./App.jsx";


// import "./main.scss";

export default function Root() {

  return (
    // <React.StrictMode>
    < App />
    // </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);