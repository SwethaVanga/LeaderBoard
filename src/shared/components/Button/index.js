import React from 'react'
import style from './index.module.scss'

const Button = ({ title, clickAction }) => {
  return (
    <div className={style.button} onClick={clickAction}>
      {title}
    </div>
  )
}

export default Button
