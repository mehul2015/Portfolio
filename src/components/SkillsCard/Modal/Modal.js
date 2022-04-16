import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import '../../../globals.css';

function Modal(props) {
  return ReactDOM.createPortal(
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-heading'>{props.title}</div>
        <div className='modal-content'>
          {props.skills.map((skill) => {
            return (
              <div className='modal-skill'>
                <img src={skill} className='skill-image' />
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
