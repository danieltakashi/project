import { default as App } from './[action]'
import renderer from 'react-test-renderer'

test('Test Render BusinessDateGrid', () => {
  const component = renderer.create(<App/>)
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})