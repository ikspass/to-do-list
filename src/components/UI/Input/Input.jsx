import React from 'react';
import classes from '../Input/Input.module.css';
import IconButton from '../IconButton/IconButton';

const Input = ({ title, eraseButton, type = 'text', value = '', onChange }) => {
  return (
    <div className={classes.container}>
      {title && <p className={`small-text ${classes.title}`}>{title}</p>}
      <div className={classes.buttonContainer}>
        <input
          type={type}
          value={value}
          className={classes.input + ' normal-text'}
          onChange={onChange}
        />
        {eraseButton && (
          <IconButton onClick={onChange} size={30} action="erase" />
        )}
      </div>
    </div>
  );
};

export default Input;