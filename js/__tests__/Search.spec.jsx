import React from 'react'
import renderer from 'react-test-renderer'
import Search from '../Search'
// import { shallow } from 'enzyme'

test('Search renders correctly', () => {
  const component = renderer.create(<Search />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
