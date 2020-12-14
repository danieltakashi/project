import { default as BusinessLocationGrid } from './BusinessLocationGrid'
import renderer from 'react-test-renderer'

test('Test Render BusinessDateGrid', () => {
  const component = renderer.create(<BusinessLocationGrid/>)
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})