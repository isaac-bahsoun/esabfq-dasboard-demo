import React, { useState } from 'react';
import { InfoIcon } from './icons/info';
import { DeleteIcon } from './icons/delete';
import { WarningIcon } from './icons/warning';
import { SuccessIcon } from './icons/success';

export default function Modal({message,type}) {
  const [isActive, setIsActive] = useState(true);
  let icon;
  let title;
  let css ;
  let bg ;

  switch (type) {
    case "error":
      
      icon = <DeleteIcon/>
      title = "Error"
      css = 'is-danger'
      bg = 'danger'
      break;
    case "warning":
      
      icon = <WarningIcon/>
      title = "Warning"
      css = 'is-warning'
      bg = 'warning'
      break;
    case "info":
      
      icon = <InfoIcon/>
      title = "Info"
      css = 'is-info'
      bg = 'info'

      break;
    case "success":
      
      icon = <SuccessIcon/>
      title = "Success"
      css= 'is-success'
      bg = 'success'

      break;
  
    default:
      break;
  }
  return (
    <>
        <div className={`modal ${isActive ? "is-active" : ""}` } >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className={`modal-card-head has-background-${bg}`}>
            <span className="modal-card-title has-text-black">
            <span className='has-text-white'>{title}</span>
            </span>
            
              <button className="delete" aria-label="close" onClick={() => window.location.reload()}></button>
            </header>
            <section className="modal-card-body">
            
              <span className="has-text-centered has-text-grey">
              <div >{icon}</div>
              <div className={`mt-2 has-text-${bg}-dark`}>{message}</div> 
              </span>
            </section>
          </div>
        </div>
      
    </>
  );
}
