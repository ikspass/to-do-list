import React from "react";
import classes from "../IconButton/IconButton.module.css";
import PropTypes from "prop-types";
import { ReactComponent as AddIcon } from '../../../styles/svg/add.svg'
import { ReactComponent as EditIcon } from '../../../styles/svg/edit.svg'
import { ReactComponent as ProrogueIcon } from '../../../styles/svg/prorogue.svg'
import { ReactComponent as DeleteIcon } from '../../../styles/svg/delete.svg'
import { ReactComponent as ReturnIcon } from '../../../styles/svg/return.svg'
import { ReactComponent as EraseIcon } from '../../../styles/svg/erase.svg'

const iconMap = {
  add: AddIcon,
  edit: EditIcon,
  prorogue: ProrogueIcon,
  delete: DeleteIcon,
  return: ReturnIcon,
  erase: EraseIcon
}

const IconButton = ({ action, className, size = 50, ...props}) => {

  const IconComponent = iconMap[action]
  return (
    <div {...props} className={`${classes.button} ${className === 'danger' && classes.danger} ${size === 50 && classes.h50} ${size === 30 && classes.h30}`}>
      {IconComponent && <IconComponent/>}
    </div>
  )
};

IconButton.propTypes = {
  action: PropTypes.oneOf(['add', 'edit', 'prorogue', 'erase', 'delete', 'return']).isRequired,
};

export default IconButton;
