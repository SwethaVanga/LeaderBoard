import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Table from '../../components/Table'
import style from './index.module.scss'
import { connect } from 'react-redux'
import { selectorGetPlayers } from '../../redux/player-service/selector'
import { getAllPlayers } from '../../redux/player-service/actions'
import store from '../../redux/root'

const Main = ({ players, getAllPlayers }) => {
  const [firstView, setFirstView] = useState(null)
  store.subscribe(() => {
    setFirstView(store.getState().playerRedux.players)
  })
  useEffect(() => {
    getAllPlayers()
  }, [players, getAllPlayers])

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.title}>
          Cube<span>19</span> Leaderboard
        </div>
        {firstView && !!firstView.length && (
          <Header users={firstView.slice(0, 4)} />
        )}
        {firstView && !!firstView.length && <Table players={firstView} />}
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    players: selectorGetPlayers(store),
  }
}

const mapDispatchToProps = {
  getAllPlayers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
