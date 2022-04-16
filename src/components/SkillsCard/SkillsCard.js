import React from 'react';
import './SkillsCard.css';
import '../../globals.css';

function SkillsCard(props) {
  return (
    <div className={props.className}>
      <div className='icon-container'>
        <img src={props.icon} alt='icon' className='icon' />
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default SkillsCard;
