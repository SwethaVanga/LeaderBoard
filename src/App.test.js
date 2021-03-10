import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/root'
import renderer from 'react-test-renderer'

it('render correctly App component', () => {
  const AppComponent = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON()
  expect(AppComponent).toMatchSnapshot()
})
