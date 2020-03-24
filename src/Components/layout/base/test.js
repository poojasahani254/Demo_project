import React from 'react'
import { shallow } from 'enzyme'
import Renderer from 'react-test-renderer'
import { BaseLayoutComponent } from '.'

const setup = propOverrides => {
  const props = {
    ...propOverrides
  }

  const base = (
    <BaseLayoutComponent {...props}>
      this is Layout component
    </BaseLayoutComponent>
  )
  const component = shallow(base)
  const instance = component.instance()
  const tree = Renderer.create(base).toJSON()
  return {
    tree,
    props,
    component,
    instance
  }
}

describe('Base Layout Component ', () => {
  it('Snapshot', () => {
    const { tree } = setup()
    expect(tree).toMatchSnapshot()
  })
  it('should render correctly', () => {
    const { component } = setup()
    expect(component.find('.wrap')).toHaveLength(1)
  })
})
