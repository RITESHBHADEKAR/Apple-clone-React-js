import React from 'react';

const Section2 = () => {
  return (
    <section className='iphone14 iphone14-pro' id='home1'>
      {/* <img src='public\iphone 14.jpg' className='img iphone14-img' alt='' /> */}
      <div className='section-title'>
        <h1>Iphone 14</h1>
        <h5>Big And Bigger.</h5>
      </div>
      <div className='section-link'>
        <a href='https://www.apple.com/iphone-14-pro/'>Learn more</a>
        <span>
          <i className='fas fa-angle-right'></i>
        </span>
        <a href='https://www.apple.com/shop/buy-iphone/iphone-14-pro'>Buy</a>
        <span>
          <i className='fas fa-angle-right'></i>
        </span>
      </div>
    </section>
  );
};

export default Section2;
