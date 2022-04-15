import React from 'react';
import './LandingPage.css';
import '../../globals.css';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='landing-page-container'>
        <nav className='navbar'>
          <img src='./images/mf-logo.svg' alt='my logo' className='logo' />
          <a href='redirectToForm' className='btn btn-primary'>
            Say Hello
          </a>
        </nav>

        <div className='landing-page-content-container'>
          <div className='heading u-margin-top-medium'>
            <h1 className='heading-primary'>
              Designer and Full Stack Developer
            </h1>
            <h2 className='heading-secondary u-margin-bottom-large'>
              I like coding,coffee and clouds
            </h2>
          </div>
          <div className='personal-image'>
            <img src='./images/mf-avatar.svg' alt='this will be my image' />
          </div>

          <div className='devices-mockup'>
            <img
              src='./images/mockup.svg'
              alt='Apple Mockup Image'
              className='mockup-svg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
