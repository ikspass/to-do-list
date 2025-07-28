import React from 'react'
import classes from '../Button/Button.module.css'

const Button = ({children, className, ...props}) => {
  return (
    <button className={`normal-text ${classes.button} ${className === 'primary' && classes.primary} ${className === 'danger' && classes.danger}`} {...props}>{children}</button>
  )
}

export default Button;