import React from 'react';
import './Home.css';
// import heroImg from '../../assets/image/hero-bg.jpg'; // Replace with your image

function Home() {
  return (
    <div className="home-container d-flex align-items-center justify-content-center">
      <div className="text-center text-white px-3">
        <h1 className="display-4 ">
          All you need to make money <br /> doing what you love
        </h1>
        <p className="lead mt-3">
          It’s free and takes less than a minute!
        </p>
        <a href="#register" className="btn btn-lg btn-primary mt-4">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Home;
