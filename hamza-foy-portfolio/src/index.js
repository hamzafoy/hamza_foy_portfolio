import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './Header/Navigation'
import Footer from './Footer/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);