import React from 'react';
import './Footer.css';
import '../../globals.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='hire-me-container'>
        <p>Download my Resume</p>
        <a href='#' className='btn btn-tertiary'>
          <div className='resume-icon-container'>
            <img
              src='./images/footer/resume-2.png'
              alt='resume'
              className='resume-image'
            />
          </div>
        </a>
      </div>
      <div className='footer-container'>
        <img src='./images/logo.png' className='logo' alt='logo' />
        <div className='social-icons-container'>
          <img
            src='./images/footer/instagram.png'
            alt='instagram'
            className='social-icon'
          />
          <img
            src='./images/footer/linkedin.png'
            alt='linkedin'
            className='social-icon'
          />
          <img
            src='./images/footer/github.png'
            alt='github'
            className='social-icon'
          />
          <img
            src='./images/footer/email.png'
            alt='email'
            className='social-icon'
          />
        </div>
        <a href='#home' className='btn btn-primary'>
          Say Hello
        </a>
      </div>
    </footer>
  );
}

export default Footer;
