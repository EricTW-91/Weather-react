import React, { useState, useEffect } from 'react';
import './App.scss';
// Import react bootstrap!!! (App.js or index.js)
import 'bootstrap/dist/css/bootstrap.min.css';
// Import jquery.
import $ from 'jquery';
import Provider from './components/Context'
import Forecast from './components/Forecast';
import Header from './components/Header';
import Panel from './components/Panel';


function App() {

  const togglePanel = () => {
    $('aside').toggle('slow');
    // $('.mainContainer').css('grid-template-columns', '12fr 0fr')
  }



  return (
    <Provider>
      <div className='mainContainer'>
        <Header togglePanel={ togglePanel }/>
        <Forecast />
        <Panel />
      </div>
    </Provider>
  );
}

export default App;
