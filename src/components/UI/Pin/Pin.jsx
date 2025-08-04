import React from 'react'
import classes from './Pin.module.css'

const Pin = ({children, active, ...props}) => {
  return (
    <button 
      className={classes.pin + ' normal-text' + active ? classes.active : ''} {...props}
      
    >
      {children}
    </button>
  )
}

export default Pin;