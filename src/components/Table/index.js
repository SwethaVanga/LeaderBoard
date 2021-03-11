import React, { useState } from 'react'
import Button from '../../shared/components/Button'
import Row from '../../shared/components/Row'
import Modal from '../Modal'
import style from './index.module.scss'
import {
  selectorIsModal,
  selectorIsModalUpdate,
} from '../../redux/player-service/selector'
import {
  showModal,
  hideModal,
  showModalUpdate,
  hideModalUpdate,
} from '../../redux/player-service/actions'
import { connect } from 'react-redux'

const Table = ({
  players,
  showModal,
  hideModal,
  showModalUpdate,
  hideModalUpdate,
  isModalUpdateOpened,
  isModalOpened,
}) => {
  const [editPlayer, setEditPlayer] = useState(null)

  return (
		
    <div className={style.table}>
      <div className={style.table__header}>
        <span className={style.table__title}>
          Leaders table for this period
        </span>
        <Button title="+ Add new source" clickAction={() => showModal()} />
      </div>
      <div className={style.table__inner}>
        {players &&
          !!players.length &&
          players.map((player, index) => {
            return (
              <Row
                key={index}
                position={index + 1}
                changePosition={index}
                player={player}
                showModalUpdate={showModalUpdate}
                editUser={setEditPlayer}
              ></Row>
            )
          })}
      </div>
      {isModalOpened && <Modal setClose={hideModal} />}
      {isModalUpdateOpened && (
        <Modal setClose={hideModalUpdate} id={editPlayer} />
      )}
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    isModalOpened: selectorIsModal(store),
    isModalUpdateOpened: selectorIsModalUpdate(store),
  }
}

const mapDispatchToProps = {
  showModal,
  hideModal,
  hideModalUpdate,
  showModalUpdate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
