import React from 'react'
import classes from '../Button/Button.module.css'

const Button = ({children, ...props}) => {
  return (
    <button className={'normal-text ' + classes.button} {...props}>{children}</button>
  )
}

export default Button;