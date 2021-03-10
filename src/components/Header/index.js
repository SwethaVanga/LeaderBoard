import React from 'react'
import style from './index.module.scss'
import People from '../../assets/images/business-people.svg'
import { ReactSVG } from 'react-svg'
import User from '../../shared/components/User'

const Header = ({ users }) => {
  return (
    <div className={style.header}>
      <div className={style.header__rating}>
        <span className={style.header_title}>All time Highest Scorers</span>
        <ul className={style.header__list}>
          {!!users.length &&
            users.map((user, index) => {
              return <User name={user.name} score={user.score} key={index} />
            })}
        </ul>
      </div>
      <div className={style.header__image}>
        <ReactSVG src={People} className={style.image} />
      </div>
    </div>
  )
}

export default Header
