import React from 'react'
import renderer from 'react-test-renderer'
import Header from './index.js'

it('render correctly header component', () => {
  const props = [{ name: '', score: 0 }]
  const HeaderComponent = renderer.create(<Header users={props} />).toJSON()
  expect(HeaderComponent).toMatchSnapshot()
})
