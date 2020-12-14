import { default as BusinessDateGrid } from './BusinessDateGrid'
import renderer from 'react-test-renderer'

test('Test Render BusinessDateGrid', () => {
  const component = renderer.create(<BusinessDateGrid/>)
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})