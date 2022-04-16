import React, { useState } from 'react';
import './About.css';
import '../SkillsCard/SkillsCard';
import '../../globals.css';
import SkillsCard from '../SkillsCard/SkillsCard';
import Modal from '../SkillsCard/Modal/Modal';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState(' ');

  const getDataFromSkillCard = (title, skills) => {
    setTitle(title);
    setSkills(skills);
  };

  const languages = [
    './images/skills/js.png',
    './images/skills/ts.png',
    './images/skills/java.png',
  ];
  const frontend = [
    './images/skills/sass.png',
    './images/skills/react.png',
    './images/skills/next.png',
  ];
  const backend = [
    './images/skills/node.png',
    './images/skills/express.png',
    './images/skills/spring.png',
  ];

  return (
    <>
      <div className='about-me'>
        <div className='about-me-container'>
          <div className='heading'>
            <h1 className='heading-primary decrease-letter-spacing'>
              Hi, I'm Mehul.
            </h1>
            <div className='heading-secondary-container'>
              <h2 className='heading-secondary-secondary'>
                I focus on
                <span className='span-1'> Thoughtful Interactions,</span>
                <span className='span-2'> Minimalistic Designs,</span>
                <span className='span-3'> Clean Code</span> and
                <span className='span-4'>
                  &nbsp;Solid and Scalable Product Architectures.
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className='skills-card-container'>
          <SkillsCard
            className='skills-card'
            title='Programming languages.'
            icon='./images/languages.svg'
            skills={languages}
            onClick={() => setIsOpen(true)}
            sendData={getDataFromSkillCard}
          />
          <SkillsCard
            className='skills-card'
            title='frontend technologies.'
            icon='./images/frontend.svg'
            skills={frontend}
            onClick={() => setIsOpen(true)}
            sendData={getDataFromSkillCard}
          />
          <SkillsCard
            className='skills-card'
            title='backend technologies.'
            icon='./images/backend.svg'
            skills={backend}
            onClick={() => setIsOpen(true)}
            sendData={getDataFromSkillCard}
          />
        </div>
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} skills={skills} title={title} />
      )}
    </>
  );
}

export default About;
