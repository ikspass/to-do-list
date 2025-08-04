import React from 'react'
import Button from './UI/Button/Button';
import PropTypes from "prop-types";

const Exception = ({message, action, isOpen, onClose, confirm}) => {
  const handleOverlayClick = (e) => {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  const handleConfirmClick = () => {
    confirm();
    onClose();
  }

  return (
    <div className={`modal-overlay${isOpen ? ' active' : ''}`} onClick={handleOverlayClick}>
      <div className='exception-container'>
        <p className="normal-text">{message}</p>
        {action === 'ok' && 
          <div className="buttons-container">
            <Button onClick={onClose}>Ок</Button>
          </div>
        }
        {action === 'or' &&
          <div className='buttons-container'>
            <Button className='primary' onClick={handleConfirmClick}>Да</Button>
            <Button onClick={onClose}>Нет</Button>
          </div>
        }
      </div>
    </div>
  )
}

Exception.propTypes = {
  action: PropTypes.oneOf(['or', 'ok']).isRequired,
};

export default Exception;