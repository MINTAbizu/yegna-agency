import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
// import heroImg from '../../assets/image/hero-bg.jpg'; // Replace with your image

function Home() {
  return (
    <div className="home-container d-flex align-items-center justify-content-center">
      <div className="text-center text-white px-3">
        <h1 className="display-4 ">
          All you need to make money <br /> Sell What You Have On ur hand
        </h1>
        <p className="lead mt-3">
          It’s free and takes less than a minute!
        </p>
         <div className='homebtn d-flex  gap-5 '>
          <div className="getstartbtn">
             <Link to={'/register'} className="btn btn-lg btn-primary mt-4">
          Get Started
        </Link>
          </div>
          <div className="browseallproduct">
             <Link to={'/BrowseAllProducts'} className="btn btn-lg btn-primary mt-4">
          Browse-All
        </Link>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Home;
