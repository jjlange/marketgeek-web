/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Application Rendering Point
 **/

// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS file
import './css/index.css';

// Import main app view to render the application
import App from './Views/App';

// Render the DOM model with the main app view for the root element in the index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);