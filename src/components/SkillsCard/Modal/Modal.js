import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import '../../../globals.css';

function Modal(props) {
  return ReactDOM.createPortal(
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-heading'>{props.title}</div>
        <div className='modal-content-container'>
          {props.skills.map((skill) => {
            return (
              <div className='modal-content'>
                <div className='modal-skills'>
                  <img
                    src={skill.link}
                    className='skill-image'
                    alt='skillllzzzz'
                  />
                </div>
                <div className='modal-skills-title'>
                  <p>{skill.name}</p>
                </div>
                <div className='modal-skills-rating'>{skill.rating}</div>
              </div>
            );
          })}
        </div>

        <div className='modal-button' onClick={props.onClose}>
          Close
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;
