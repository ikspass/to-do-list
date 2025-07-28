import React from 'react'
import classes from '../Input/Input.module.css'

const Input = ({title, ...props}) => {
  return (
    <div className={classes.container}>
      {
        title && <p className={`small-text ${classes.title}`}>{title}</p>
      }
      <input className={classes.input + ' normal-text'} {...props}/>
    </div>
  )
}

export default Input;