import {
  GET_PLAYERS,
  UPDATE_PLAYER,
  CREATE_PLAYER,
  MODAL_DISPLAYED,
  MODAL_DISPLAYED_UPDATE,
  REFRESH_LIST,
} from '../actions-types'

const initState = {
  players: null,
  isModalOpened: false,
  isModalUpdateOpened: false,
}

const playersReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
  case UPDATE_PLAYER:
    return {
      ...state,
      players: state.players.map((player, index) => {
        if (index === payload.id) {
          return { name: payload.name, score: +payload.score }
        }
        return player
      }),
    }
  case CREATE_PLAYER:
    return {
      ...state,
      players: [...state.players, payload],
    }
  case GET_PLAYERS:
    return { ...state, players: payload }
  case MODAL_DISPLAYED:
    return { ...state, isModalOpened: payload }
  case MODAL_DISPLAYED_UPDATE:
    return { ...state, isModalUpdateOpened: payload }
  case REFRESH_LIST:
    return {
      ...state,
      players: state.players.sort((a, b) => b.score - a.score),
    }
  default:
    return state
  }
}

export default playersReducer
