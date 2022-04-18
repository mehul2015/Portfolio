import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className='project'>
      <span style={{ color: 'yellow' }}>&#65371;</span>
      <div>
        <span style={{ color: '#409cc9' }}>title:</span>
        <span className={props.project.title}>
          &nbsp;"{props.project.title}."
        </span>
      </div>
      <div>
        <span style={{ color: '#409cc9' }}>description:</span>
        <span>&nbsp;"{props.project.description}."</span>
      </div>
      <div className='links'>
        <span style={{ color: '#409cc9' }}>website:</span>
        <a href={props.project.website} className='btn btn-tertiary'>
          <img
            src='./images/website.png'
            className='code-image new-hover'
            alt='website'
          />
        </a>
      </div>
      <div className='links'>
        <span style={{ color: '#409cc9' }}>sourceCode: </span>
        <a href={props.project.sourceCode} className='btn btn-tertiary'>
          <img
            src='./images/github-white.png'
            className='code-image new-hover'
            alt='github'
          />
        </a>
      </div>
      <span style={{ color: 'yellow' }}>
        {' '}
        &#65373; <span style={{ color: 'white' }}>,</span>
      </span>
    </div>
  );
}

export default Project;
