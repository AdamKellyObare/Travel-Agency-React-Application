import React from 'react';
import './App.css';
import Destinations from './Components/Destinations/Destinations';
import Footer from './Components/Footer/Footer';
import Middle from './Components/Middle/Middle';
import NavBar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Reviews from './Components/Reviews/Reviews';
import Subscirbe from './Components/Subscribe/Subscribe';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <Middle />
      <Destinations />
      <Portfolio />
      <Reviews />
      <Subscirbe />
      <Footer /> */}
    </div>
  );
}

export default App;
