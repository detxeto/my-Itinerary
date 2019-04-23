import React from 'react';
import Navbar from './Navbar';
import MyItineraryLogo from './MyItineraryLogo';
import MainLink from './MainLink';



import MultipleRows from './Carrousel';




import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar  />
     
        <MyItineraryLogo />
        <MainLink />
       <MultipleRows />
      </header>
    </div>
  );
}

export default App;
