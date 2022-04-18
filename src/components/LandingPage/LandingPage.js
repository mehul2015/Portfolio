import React from 'react';
import './LandingPage.css';
import '../../globals.css';

// import { AttentionSeeker } from 'react-awesome-reveal';
// import { Fade } from 'react-awesome-reveal';

const LandingPage = () => {
  return (
    <div className='landing-page' id='home'>
      <div className='landing-page-container'>
        <nav className='navbar'>
          <img src='./images/logo.png' alt='my logo' className='logo' />
          <a
            href='mailto:mehuldev2015@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='btn btn-primary'
          >
            Say Hello
          </a>
        </nav>

        <div className='landing-page-content-container'>
          <div className='heading u-margin-top-medium'>
            <h1 className='heading-primary'>
              Designer &#38; Full Stack Developer.
            </h1>
            <h2 className='heading-secondary u-margin-bottom-large'>
              I like coding, coffee and clouds.
            </h2>
          </div>
          <div className='personal-image-container'>
            <img
              src='./images/avatar.jpg'
              alt='Personal'
              className='personal-image'
            />
          </div>

          <div className='devices-mockup'>
            <img
              src='./images/mockup.svg'
              alt='Apple Mockup'
              className='mockup-svg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
