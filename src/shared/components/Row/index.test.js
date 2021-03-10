import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import store from '../../../redux/root.js'
import Row from '../Form/index.js'

it('render correctly row component', () => {
  const props = {
    position: 1,
    changePosition: 1,
    player: {
      name: '',
      score: 1,
    },
    showModalUpdate: () => false,
    editUser: () => 1,
  }
  const RowComponent = renderer
    .create(
      <Provider store={store}>
        <Row
          position={props.position}
          changePosition={props.changePosition}
          player={props.player}
          showModalUpdate={props.showModalUpdate}
          editUser={props.editUser}
        />
      </Provider>
    )
    .toJSON()
  expect(RowComponent).toMatchSnapshot()
})
