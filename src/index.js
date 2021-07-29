import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css'
import DataProcessor from './modules/data-processor.js';

DataProcessor.process()

ReactDOM.render(
    <App weather/>,
  document.getElementById('root')
);
