import React, { useState } from 'react';
import Data from './Data';

const HelpSection = () => {
  const [openlist, setopen] = useState(false);

  return (
    <section className='help section-center'>
      {Data.map((i) => {
        return (
          <article>
            <div className='help-tap-btn'>
              <p>{i.title}</p>
              <button
                className='help-btn'
                onClick={() => {
                  setopen(!openlist);
                }}
              >
                <span
                  className={`'plus-icon' ${
                    openlist ? 'hide-icon' : 'show-icon'
                  }`}
                >
                  <i className='fas fa-plus'></i>
                </span>
                <span className={` ${openlist ? 'show-icon' : 'hide-icon'}`}>
                  <i className='fas fa-times'></i>
                </span>
              </button>
            </div>
            <div
              className={`'list-container' ${
                openlist ? 'show-link' : 'hide-link'
              }`}
            >
              {i.linkItems.map((item) => {
                return <a href=''>{item}</a>;
              })}
            </div>
          </article>
        );
      })}

      {/* <article>
        <div className='help-tap-btn'>
          <p>shop and learn</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <div className='link-container'>
          <a href='#'>store </a>
          <a href='#'>mac</a>
          <a href='#'>ipad</a>
          <a href='#'>iphone</a>
          <a href='#'>Airpods</a>
          <a href='#'>Tv & home</a>
          <a href='#'>AirTag</a>
          <a href='#'>accessories</a>
          <a href='#'>gift cards</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>apple wallet</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>

        <div className='link-container'>
          <a href='#'>wallet </a>
          <a href='#'>apple card</a>
          <a href='#'>apple pay</a>
          <a href='#'>apple cash</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>Account</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <div className='link-container'>
          <a href='#'>manage your apple id</a>
          <a href='#'>apple store account</a>
          <a href='#'>icloud.com</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>entertaintment</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <div className='link-container'>
          <a href='#'>apple one</a>
          <a href='#'>apple TV+</a>
          <a href='#'>Apple music</a>
          <a href='#'>Apple Acrade</a>
          <a href='#'>Apple fitness+</a>
          <a href='#'>apple news+</a>
          <a href='#'>apple podcasts</a>
          <a href='#'>apple Books</a>
          <a href='#'>apple store</a>
        </div>
      </article>

      <article>
        <div className='help-tap-btn'>
          <p>Apple Store</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <div className='link-container'>
          <a href='#'>Find a store</a>
          <a href='#'>Genius Bar</a>
          <a href='#'>Today at Apple</a>
          <a href='#'>Apple Camp</a>
          <a href='#'>Apple Store app</a>
          <a href='#'>certified refurblished</a>
          <a href='#'>apple trade in</a>
          <a href='#'>financing</a>
          <a href='#'>career deals at apple</a>
          <a href='#'>order status</a>
          <a href='#'>shopping help</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>for business</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <div className='link-container'>
          <a href='#'>apple and business</a>
          <a href='#'>shop for business</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>for Education</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <div className='link-container'>
          <a href='#'>apple and Education</a>
          <a href='#'>shop for k-12</a>
          <a href='#'>shop for college</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>for Healthcare</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>

        <div className='link-container'>
          <a href='#'>apple in Healthcare</a>
          <a href='#'>health on apple Watch</a>
          <a href='#'>health records on iphone</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>for government</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>

        <div className='link-container'>
          <a href='#'>shop for Government</a>
          <a href='#'>shop for veterans and Military</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>about apple</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <div className='link-container'>
          <a href='#'>Newsroom </a>
          <a href='#'>apple Leadership</a>
          <a href='#'>career Opportunities</a>
          <a href='#'>Investors</a>
          <a href='#'>Ethics & Compliance</a>
          <a href='#'>contact apple</a>
        </div>
      </article>
      <article>
        <div className='help-tap-btn'>
          <p>apple values</p>
          <button className='help-btn'>
            <span className='plus-icon'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='times-icon'>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <div className='link-container'>
          <a href='#'>Accessibility</a>
          <a href='#'>Education</a>
          <a href='#'>Environment</a>
          <a href='#'>Inclusion and Diversity</a>
          <a href='#'>Privacy</a>
          <a href='#'>recial Equity and Justice</a>
          <a href='#'>Supplier Responsibility</a>
        </div>
      </article> */}
    </section>
  );
};

export default HelpSection;
