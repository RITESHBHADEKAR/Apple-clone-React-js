import React, { useState } from 'react';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className='navbar '>
      <div className='nav-center section-center'>
        <div className='nav-header'>
          <button className='icon'>
            <a href='#home' className='apple-icon icon '>
              <i className='fab fa-apple'></i>
            </a>
          </button>
          <button
            className='toggle'
            onClick={() => {
              settoggle(!toggle);
            }}
          >
            <span>
              <i className='fas fa-bars icon'></i>
            </span>
          </button>
        </div>
        <div className='nav-container'>
          <button className='icon'>
            <a href='#home' className='apple-icon icon'>
              <i className='fab fa-apple'></i>
            </a>
          </button>
          <ul className='nav-link'>
            <li>
              <a href='#home' className='scroll-link'>
                store
              </a>
            </li>
            <li>
              <a href='#home1' className='scroll-link'>
                mac
              </a>
            </li>
            <li>
              <a href='#home2' className='scroll-link'>
                ipad
              </a>
            </li>
            <li>
              <a href='#home3' className='scroll-link'>
                iphone
              </a>
            </li>
            <li>
              <a href='#home4' className='scroll-link'>
                watch
              </a>
            </li>
            <li>
              <a href='#home5' className='scroll-link' id='airpods'>
                Air pods
              </a>
            </li>
            <li>
              <a href='#home6' className='scroll-link'>
                TV & Home
              </a>
            </li>
            <li>
              <a href='#home7' className='scroll-link'>
                Entertainment
              </a>
            </li>
            <li>
              <a href='#home8' className='scroll-link'>
                Accessories
              </a>
            </li>
            <li>
              <a href='#home9' className='scroll-link'>
                support
              </a>
            </li>
          </ul>
          <ul className='social-icons'>
            <li>
              <a href=''>
                <i className='fas fa-search icon'></i>
              </a>
            </li>
            <li>
              <a href='https://www.apple.com'>
                <i className='fas fa-shopping-bag icon'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
