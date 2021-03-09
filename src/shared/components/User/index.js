import React from 'react'
import styles from './index.module.scss'
import { getUserAvatar } from '../../../utils/helpers'

const User = ({ name, score }) => {
  return (
    <div className={styles.user}>
      <div className={styles.user__avatar}>
        <div className={styles.user__image}>{getUserAvatar(name)}</div>
        <div className={styles.user__score}>{score}</div>
      </div>
      <div className={styles.user__name}>{name}</div>
    </div>
  )
}

export default User
