import React from 'react';
import AppNavbar from './components/AppNavbar';
// import MyItineraryLogo from './components/MyItineraryLogo';
// import MainLink from './components/MainLink';
import {BrowserRouter, Route} from 'react-router-dom';
// import MultipleRows from './components/Carrousel';
import Cities from'./components/Cities';
import Home from'./components/Home';
import Footer from'./components/Footer';
import Login from './components/Login';
import CreateAccount from'./components/CreateAccount';
import Itineraries from'./components/Itineraries';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
   <Provider store={store}>
   <BrowserRouter>
    < div className="App">
      <header className="App-header">
       <AppNavbar  />
       <Route exact path='/' component={Home}/>
      <Route path='/Cities'component={Cities}/>
      <Route path='/Login'component={Login}/>
      <Route path='/CreateAccount'component={CreateAccount}/>
      <Route path='/Itineraries' component={Itineraries}/>
    
       <Footer />
        
       
       </header>
      </div>
    </BrowserRouter>
    </Provider>
    
  )
}

export default App;
