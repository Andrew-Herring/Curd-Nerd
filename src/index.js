import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CurdNerd from './components/CurdNerd';
import { BrowserRouter as Router } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Router>
      <CurdNerd />
  </Router>
  , document.getElementById('root'))