import React from 'react';
import './Home.css';

// imported assets
import Video from '../../Assets/video.mp4';

// imported icons
import {AiOutlineSwapRight} from 'react-icons/ai';


const Home = () => {
  return (
    <div className='home'>
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>


      <div className="sectionText">
        <h1>Unlock Your Travel Dreams With Golden Trips Expeditons</h1>
        <p>
            Get to Discover the most adventurous natures of the world,
            life is short for a trip.
        </p>
        <button className='btn flex'>GET STARTED
          <AiOutlineSwapRight className="icon"/> </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex">
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
