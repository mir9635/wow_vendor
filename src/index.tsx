import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Layout from './common/components/layout';
import "./assets/styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Layout/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


