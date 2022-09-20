import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Major Mono Display: 200,300,400, 500, 700",
      "JetBrains Mono: 100,200,300,400,500,600,700",
      "Dosis: 100,200,300,400,500,700",
      "Nunito: 200,300, 400,500,600,700",
      "Montserrat: 200,300,400,500",
    ],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



serviceWorker.register();