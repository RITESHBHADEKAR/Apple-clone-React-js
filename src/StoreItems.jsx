import React from 'react';

const StoreItems = () => {
  return (
    <div className='adds-items'>
      <article className='watch item'>
        <div className='store-title'>
          <h1>
            Apple Watch <br />
            Series 8
          </h1>
          <h3>A healthy leap ahead.</h3>
          <div className='section-link'>
            <a href='https://www.apple.com/iphone-14-pro/'>Learn more</a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
            <a href='https://www.apple.com/shop/buy-iphone/iphone-14-pro'>
              Buy{' '}
            </a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
          </div>
        </div>
      </article>
      <article className='speaker item'>
        <div className='store-title'>
          <h1>HomePod</h1>
          <h4>profound sound.</h4>
          <div className='section-link'>
            <a href='https://www.apple.com/iphone-14-pro/'>Learn more</a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
            <a href='https://www.apple.com/shop/buy-iphone/iphone-14-pro'>
              Buy
            </a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
          </div>
        </div>
      </article>
      <article className='watch2 item' id='home7'>
        <div className='store-title'>
          <h1>
            Creativity and community. <br /> Woven together.
          </h1>
          <h4>Explore the new Black Unity watch band and matching face.</h4>
          <div className='section-link'>
            <a href='https://www.apple.com/iphone-14-pro/'>Learn more</a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
            <a href='https://www.apple.com/shop/buy-iphone/iphone-14-pro'>
              Buy
            </a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
          </div>
        </div>
      </article>
      <article className='valentine item'>
        <div className='store-title'>
          <h1 className='black-font'>Valentine's Day</h1>
          <h3 className='black-font'>Sealed with a gift.</h3>
          <div className='section-link'>
            <a href='https://www.apple.com/shop/buy-iphone/iphone-14-pro'>
              shop now
            </a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
          </div>
        </div>
      </article>
      <article className='apple-fitness item'>
        <div className='store-title black-font'>
          <h1 className='black-font'>Apple Fitness +</h1>
          <h3 className='black-font'>
            Welcome to the year of you. Now all you need is iphone.
          </h3>
          <div className='section-link'>
            <a href='https://www.apple.com/iphone-14-pro/'>Learn more</a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
            <a href='https://www.apple.com/shop/buy-iphone/iphone-14-pro'>
              Try it free
            </a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
          </div>
        </div>
      </article>

      <article className='apple-card item'>
        <div className='store-title'>
          <div className='store-title'>
            <h1 className='black-font'>Apple Card</h1>
            <h3 className='black-font'>
              Get up to 3% Daily Cash back with every purchase.
            </h3>
          </div>
          <div className='section-link'>
            <a href='https://www.apple.com/iphone-14-pro/'>Learn more</a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
            <a href='https://www.apple.com/shop/buy-iphone/iphone-14-pro'>
              Apply now
            </a>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default StoreItems;
