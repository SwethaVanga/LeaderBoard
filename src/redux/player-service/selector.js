export const selectorGetPlayers = (store) => {
  return store.playerRedux.payload
}

export const selectorIsModal = (store) => {
  return store.playerRedux.isModalOpened
}

export const selectorIsModalUpdate = (store) => {
  return store.playerRedux.isModalUpdateOpened
}
