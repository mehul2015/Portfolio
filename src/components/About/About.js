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
    {
      link: './images/skills/js.png',
      name: 'JavaScript',
      rating: '*****',
    },
    {
      link: './images/skills/ts.png',
      name: 'TypeScript',
      rating: '****',
    },
    {
      link: './images/skills/java.png',
      name: 'Java',
      rating: '****',
    },
  ];
  const frontend = [
    {
      link: './images/skills/sass.png',
      name: 'SASS',
      rating: '*****',
    },
    {
      link: './images/skills/react.png',
      name: 'React.js',
      rating: '*****',
    },
    {
      link: './images/skills/next.png',
      name: 'Next.js',
      rating: '***',
    },
  ];

  const backend = [
    {
      link: './images/skills/node.png',
      name: 'Node.js',
      rating: '*****',
    },
    {
      link: './images/skills/express.png',
      name: 'Express.js',
      rating: '****',
    },
    {
      link: './images/skills/spring.png',
      name: 'Spring',
      rating: '***',
    },
  ];

  const languagesText = ['JavaScript', 'TypeScript', ''];

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
