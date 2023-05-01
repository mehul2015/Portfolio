import React from 'react';
import './Footer.css';
import '../../globals.css';

function Footer() {
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/in/mehulchattopadhyay/';
  };
  return (
    <footer className='footer'>
      <div className='hire-me-container'>
        <p>Download my Resume!</p>

        <div className='btn btn-tertiary'>
          <div className='resume-icon-container'>
            <a href='./Resume-Mehul.pdf' download>
              <img
                src='./images/footer/resume-4.png'
                alt='resume'
                className='resume-image'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-container'>
        <img
          src='./images/logo.png'
          alt='logo'
          className='logo'
          onClick={handleClick}
        />

        <div className='social-icons-container'>
          <a
            href='https://www.instagram.com/bengalidrummerboy/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='./images/footer/instagram.png'
              alt='instagram'
              className='social-icon'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/mehulchattopadhyay/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='./images/footer/linkedin.png'
              alt='linkedin'
              className='social-icon'
            />
          </a>
          <a
            href='https://github.com/mehul2015'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='./images/footer/github.png'
              alt='github'
              className='social-icon'
            />
          </a>
          <a
            href='mailto:mehuldev2015@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='./images/footer/email.png'
              alt='email'
              className='social-icon'
            />
          </a>
        </div>
        <a
          href='mailto:mehuldev2015@gmail.com'
          target='_blank'
          className='btn btn-primary'
          rel='noreferrer'
        >
          Say Hello
        </a>
      </div>
    </footer>
  );
}

export default Footer;
