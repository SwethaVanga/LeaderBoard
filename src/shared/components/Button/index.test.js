import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index.js'

it('render correctly button component', () => {
  const props = {
    title: '',
    clickAction: () => ('hello'),
  }
  const ButtonComponent = renderer
    .create(<Button title={props.title} clickAction={props.clickAction} />)
    .toJSON()
  expect(ButtonComponent).toMatchSnapshot()
})