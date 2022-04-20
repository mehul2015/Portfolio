import React from 'react';
import './SkillsCard.css';
import '../../globals.css';

import { AttentionSeeker } from 'react-awesome-reveal';

function SkillsCard(props) {
  return (
    <div
      className={props.className}
      onClick={() => {
        props.onClick();
        props.sendData(props.title, props.skills);
        document.querySelector('body').style.overflowY = 'hidden';
      }}
    >
      <div className='icon-container'>
        <AttentionSeeker effect='tada' delay={500} duration={5000}>
          <img src={props.icon} alt='icon' className='icon' />
        </AttentionSeeker>
      </div>
      {/* <div className='skills-title'>{props.title}</div> */}
      <div className='skills-list-container'>
        <div className='skills-list'>
          {props.skills.map((skill) => {
            return (
              <div className='skill-icon-container'>
                <img src={skill.link} className='skill' alt='skill' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
