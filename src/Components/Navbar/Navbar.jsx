import React, {useState} from 'react';
import './Navbar.css';

// Imported Icons
import {BiLogoMediumOld} from 'react-icons/bi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {PiDotsNineBold} from 'react-icons/pi';


const NavBar = () => {
  // State to track and update naveBar
  const [navBar, setNavBar] = useState('menu');
  // function to show navBar
  const showNavBar = () => {
    setNavBar('menu showNavBar');
  };

  // function to remove navBar
  // const removeNavBar = () => {
  //   setNavBar('menu ');
  // };


  return (
    <div className='navBar'>
      <div className="logoDiv">
        <BiLogoMediumOld className='icon'/>
        <span>OU-Trips</span>
      </div>
      <div className= {navBar}>
        <ul>
          <li className='navList'>Destination</li>
          <li className='navList'>About Us</li>
          <li className='navList'>Testimonials</li>
          <li className='navList'>Gallery</li>
        </ul>

        {/* Icon to remove NavBar */}
        <AiFillCloseCircle className='icon
        closeIcon' onClick={rem}/>
      </div>

      <button className="signUpBtn btn">
        Sign Up
      </button>
      {/* Icon to toggle Navbar */}
      <PiDotsNineBold className='icon menuIcon'
        onClick={showNavBar}/>

    </div>
  );
};

export default NavBar;
