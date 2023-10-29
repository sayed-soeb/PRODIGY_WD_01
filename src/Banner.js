import React from 'react';
import icon from './Styles/ani.gif';
import './Styles/Banner.css'; // Make sure to create the CSS file

const Banner = () => {
  const createFirework = (e) => {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = e.clientX + 'px';
    firework.style.top = e.clientY + 'px';
    document.querySelector('.banner').appendChild(firework);

    firework.addEventListener('animationend', () => {
      firework.remove();
    });
  };

  return (
    <div className="banner" onClick={createFirework}>
      <div className="banner-text">
        <h1>Welcome to Our Space Missions</h1>
        <p>
          Explore the fascinating world of space capsules and missions that have
          taken us to the stars and beyond. From historic launches to the latest
          explorations, join us on a journey through the cosmos.
        </p>
      </div>
      {/* <div className="banner-image">
        <img
          src="https://st2.depositphotos.com/1011081/8699/i/600/depositphotos_86997876-stock-photo-high-resolution-image-of-space.jpg"
          alt="Space Capsules"
        />
      </div> */}
    </div>
  );
};

export default Banner;
