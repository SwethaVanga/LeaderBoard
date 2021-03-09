import React from 'react'
import style from './index.module.scss'
import { ReactSVG } from 'react-svg'
import edit from '../../../assets/images/edit.png'
import classNames from 'classnames'
import Arrow from '../../../assets/images/Arrow.svg'
import { getUserAvatar } from '../../../utils/helpers'

const Row = ({
  position,
  changePosition,
  showModalUpdate,
  editUser,
  player,
}) => {
  const cx = classNames.bind(style)
  return (
    <div className={style.row}>
      <div className={style.row__inner}>
        <div className={style.row__index}>
          {position === 1
            ? `${position}st`
            : position === 2
              ? `${position}nd`
              : position === 3
                ? `${position}rd`
                : `${position}th`}
        </div>
        <div className={style.row__image}>{getUserAvatar(player.name)}</div>
        <div className={style.row__score}>{player.score}</div>
        <div className={style.row__name}>{player.name}</div>
      </div>
      <div className={style.row__inner}>
        <div
          className={cx(style.row__change, {
            [style.change__up]: changePosition > 0,
            [style.change__down]: changePosition < 0,
            [style.change__zero]: changePosition === 0,
          })}
        >
          <ReactSVG src={Arrow} />
          {changePosition === 0
            ? 'No change'
            : Math.abs(changePosition) === 1
              ? '1 place'
              : `${Math.abs(changePosition)} places`}
        </div>
        <img
          src={edit}
          className={style.row__edit}
          onClick={() => {
            showModalUpdate()
            editUser(position - 1)
          }}
          alt="edit"
        />
      </div>
    </div>
  )
}

export default Row
