import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importer le Provider
import store from './redux/store'; // Importer le store
import App from "./App.jsx";
import './styles/reset.scss';
import './styles/main.scss';
import './styles/mixins.scss';

export default function Root() {
  return (
    <Provider store={store}> {/* Envelopper toute l'application avec le Provider ici */}
      <BrowserRouter>
        <React.StrictMode>
        <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Root />);
