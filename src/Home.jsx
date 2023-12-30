import React, { useState } from 'react';

const Home = () => {
  const [playbtn, setplaybtn] = useState(false);
  return (
    <section className='home'>
      <div className='home' >
        <div className='rihanna'>
          <video className='video' autoPlay muted>
            <source src='public/y2mate.com - Rihanna Is Back  Apple Music Super Bowl LVII Halftime Show Official Trailer_1080p.mp4' />
          </video>
          {/* <video className='video'  autoPlay  muted src='public\y2mate.com - Rihanna Is Back  Apple Music Super Bowl LVII Halftime Show Official Trailer_1080p.mp4'></video> */}
          <div className='btns'>
            <button
              className={` ${playbtn ? 'show-icon' : 'hide-icon'}`}
              onClick={() => {
                setplaybtn(!playbtn);
              }}
            >
              <img src='./public/pause.png' alt='pause' />
            </button>
            <button
              onClick={() => {
                setplaybtn(!playbtn);
              }}
              className={`  ${playbtn ? 'hide-icon' : 'show-icon'}`}
            >
              <img src='./public/play.png' alt='play' />
            </button>
          </div>
        </div>
        <div className='video-banner'>
          <div className='banner-item section-center'>
            <h2>super bowl lvii</h2>
            <h3>halftime show</h3>
            <p>
              celebrate Rihanna's return with <br />
              her iconic hits now in special Audio.
            </p>
          </div>
          <div className='banner-footer'>
            <a href='https//www.apple.com'> Now on Apple Music</a>
            <img
              src='./public/arrow-up-right-square2.svg'
              className='banner-icon'
              alt='banner-icon'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
