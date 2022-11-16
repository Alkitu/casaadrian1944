import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import  LanguageContext  from "./context/LanguageContext"
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageContext>
    <Router>
      <App />
    </Router>
    </LanguageContext>
  </React.StrictMode>
);
