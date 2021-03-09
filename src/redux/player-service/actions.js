import axios from '../../utils/api'
import {
  CREATE_PLAYER,
  GET_PLAYERS,
  MODAL_DISPLAYED,
  MODAL_DISPLAYED_UPDATE,
  REFRESH_LIST,
  UPDATE_PLAYER,
} from '../actions-types'
import { checkPlayers } from '../../utils/helpers'


/**
 * get all players from api
 * when initializing of application
 * and set in redux
 *
 * part 2
 */
export const getAllPlayers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/starting-state')
    if (data.length > 0) {
      return dispatch({
        type: GET_PLAYERS,
        payload: checkPlayers(data),
      })
    }
  } catch (e) {
    console.error(e)
  }
}

/**
 * create player
 * send request to api
 * and set in redux
 * and then sorted players
 * @param {name: string, score: number} player
 *
 * part 3
 */
export const createPlayer = (player) => async (dispatch) => {
  const { name, score } = player
  const params = { username: name, score }
  try {
    const { status, data } = await axios.post('/process-user', params)
    if (status === 200) {
      return dispatch({
        type: CREATE_PLAYER,
        payload: { name: data['display-name'], score: +player.score },
      })
    }
  } catch (e) {
    console.warn(e)
  } finally {
    dispatch({
      type: REFRESH_LIST,
    })
    dispatch(hideModalAction())
  }
}

/**
 * update player
 * and update in redux
 * and then sorted players
 * @param {index of item in array of players} id
 * @param {updated properties} player
 */
export const updatePlayer = (id, player) => async (dispatch) => {
  const params = { id, ...player }
  try {
    dispatch({
      type: UPDATE_PLAYER,
      payload: params,
    })
  } catch (e) {
    console.warn(e)
  } finally {
    dispatch({
      type: REFRESH_LIST,
    })
    dispatch(hideModalUpdateAction())
  }
}

/**
 * create action to hide create modal
 */
export const hideModalAction = () => ({
  type: MODAL_DISPLAYED,
  payload: false,
})


export const showModalAction = () => ({
  type: MODAL_DISPLAYED,
  payload: true,
})

export const showModal = () => async (dispatch) => {
  dispatch(showModalAction())
}

export const hideModal = () => async (dispatch) => {
  dispatch(hideModalAction())
}

export const hideModalUpdateAction = () => ({
  type: MODAL_DISPLAYED_UPDATE,
  payload: false,
})
export const showModalUpdateAction = () => ({
  type: MODAL_DISPLAYED_UPDATE,
  payload: true,
})

export const showModalUpdate = () => async (dispatch) => {
  dispatch(showModalUpdateAction())
}

export const hideModalUpdate = () => async (dispatch) => {
  dispatch(hideModalUpdateAction())
}
