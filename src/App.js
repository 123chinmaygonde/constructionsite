import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Extra from './Components/Extra/Extra';
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import Value from "./Components/Value/Value";
import Contact from './Components/Contact/Contact';
import Getstarted from './Components/Getstarted/Getstarted';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Extra/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
  );
}

export default App;
