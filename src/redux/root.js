import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// Reducers
import playersReducer from './player-service/reducer'

const rootReducer = combineReducers({
  // Add other reducers
  playerRedux: playersReducer,
})

// Configure redux
const composeEnhancers = compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
