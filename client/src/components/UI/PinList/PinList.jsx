import React from 'react'
import Pin from '../Pin/Pin';
import classes from '../PinList/PinList.module.css'

const PinList = ({values, selected, setSelected}) => {
  return (
    <div className={classes.pinlist}>
      {values ?
      
        values.map((value, index) => 
          index === selected ? 
            <button key={index} className={ 'normal-text ' + classes.pin + ' ' + classes.active}>{value}</button>
            :
            <button key={index} className={ 'normal-text ' + classes.pin}>{value}</button>
        )
        :
        'Нет данных'
      }
    </div>
  )
}

export default PinList;