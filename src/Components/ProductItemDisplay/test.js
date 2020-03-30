import React from 'react'
import { shallow } from 'enzyme'
import Renderer from 'react-test-renderer'
import { Typography, Button } from '@material-ui/core'
import ProductItem from './index'
const setup = () =>{
    const props = {
        handleChange: jest.fn(),
        data:{
            "id":"123",
            "price":"150",
            "description":"This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
          },
      }

  const component = shallow(<ProductItem {...props} />)
  const instance = component.instance()
  const tree = Renderer.create(
      <ProductItem {...props} />
  ).toJSON()
  return {
    tree,
    props,
    component,
    instance
  }
}

describe('Product Item In Component',()=>{
    it('Snapshot', () => {
        const { tree } = setup()
        expect(tree).toMatchSnapshot()
      })
    it('Should Render Child Component Correctly',()=>{
        const { component } = setup()
        expect(component.find(Typography)).toHaveLength(2)
        expect(component.find(Button)).toHaveLength(1)
    })
})