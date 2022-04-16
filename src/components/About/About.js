import React from 'react';
import './About.css';
import '../SkillsCard/SkillsCard';
import '../../globals.css';
import SkillsCard from '../SkillsCard/SkillsCard';

function About() {
  return (
    <div className='about-me'>
      <div className='about-me-container'>
        <div className='heading'>
          <h1 className='heading-primary-about'>Hi, I'm Mehul.</h1>
          {/* <h2 className='heading-secondary-white-gradient'>
            I like coding, almost to an unhealthy extent. Solving Data
            Structures and Algorithms problems is how I relax and building web
            applications is how i like spending my vacations.
          </h2> */}
        </div>
      </div>

      <div className='skills-card-container'>
        <SkillsCard
          className='skills-card'
          title='languages'
          icon='./images/languages.svg'
        />
        <SkillsCard
          className='skills-card'
          title='front-end technologies'
          icon='./images/frontend.svg'
        />
        <SkillsCard
          className='skills-card'
          title='back-end technologies'
          icon='./images/backend.svg'
        />
      </div>
    </div>
  );
}

export default About;
