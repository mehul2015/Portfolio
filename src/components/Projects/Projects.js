import React from 'react';
import Project from './Project/Project';
import './Projects.css';

import '../../globals.css';

function Projects() {
  const project1 = {
    title: 'Netflix',
    description: 'A fully functioning clone of the Netflix Web App',
    website: 'https://netflix-clone-bb5c3.web.app',
    sourceCode: 'https://github.com/mehul2015/Netflix',
  };

  const project2 = {
    title: 'Natours',
    description: 'A website for a fictional Tourism Company',
    website: 'https://bespoke-kheer-31d922.netlify.app',
    sourceCode: 'https://github.com/mehul2015/Natours',
  };

  const project3 = {
    title: 'Portfolio',
    description: 'My developer portfolio website',
    website: 'https://master--meek-paletas-92e967.netlify.app',
    sourceCode: 'https://github.com/mehul2015/Portfolio',
  };

  return (
    <div className='projects'>
      <div className='projects-container'>
        <div className='imac-image-container'>
          <div className='scroll-down-button'>&darr;</div>
          <img src='./images/imac.png' className='imac-image' alt='imac' />
          <div className='projects-container-code'>
            <div className='code'>
              <div>
                <span style={{ color: '#409cc9' }}>const</span>
                <span style={{ color: '#135bba' }}>&nbsp;projects</span> =
                <span style={{ color: 'greenyellow' }}>&nbsp;[</span>
              </div>
              <Project project={project1} />
              <Project project={project2} />
              <Project project={project3} />
              <div
                style={{
                  color: 'greenyellow',
                  marginTop: '-4rem',
                  marginBottom: '4rem',
                }}
              >
                ];
              </div>
              <div>
                <br></br>
                <span style={{ color: '#740878' }}>if</span>
                <span style={{ color: 'greenyellow' }}>(</span>
                <span style={{ color: '#409cc9' }}>youWantToSeeMore</span>
                <span style={{ color: 'greenyellow' }}>)</span>
                <span style={{ color: 'yellow' }}>&#65371;</span>
                <br></br>
                <a href='https://github.com/mehul2015' className='github-link'>
                  <img src='./images/github-white.png' alt='github-white' />
                  <div>Check out my GitHub!</div>
                </a>
                <br></br>
                <span style={{ color: 'yellow' }}>&#65373;</span>
                <br></br>
                <span style={{ color: '#740878' }}>else</span>
                <span style={{ color: 'yellow' }}>&#65371;</span>
                <br></br>
                &nbsp; &nbsp;{' '}
                <span style={{ color: '#409cc9' }}>console.log</span>
                <span style={{ color: 'yellowgreen' }}>(</span>
                <span>
                  "Thank you for visiting my website! Have a great day!"
                </span>
                <span style={{ color: 'yellowgreen' }}>);</span>
                <br></br>
                <span style={{ color: 'yellow' }}>&#65373;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
