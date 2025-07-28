import React from 'react'
import IconButton from './UI/IconButton/IconButton';

const Modal = ({isOpen, onClose, children}) => {

  const handleOverlayClick = (e) => {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={`modal-overlay${isOpen ? ' active' : ''}`} onClick={handleOverlayClick}>
      <div className={`modal${isOpen ? ' active' : ''}`}>
        <IconButton onClick={onClose} action='return'/>
        {children}
      </div>
    </div>
  )
}

export default Modal;