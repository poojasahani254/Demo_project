import React from 'react'
import { shallow } from 'enzyme'
import Renderer from 'react-test-renderer'
import { Typography, Button } from '@material-ui/core'
import ProductItem from './index'
const setup = () =>{
    const props = {
        handleBuyNow: jest.fn(),
        handleClick: jest.fn(),
        data:[{
            id:"3Wbt1Pu9GpJSbxAh7Kk9",
            Product_description: "ddsfdsfdsf",
            Product_price:150,
            Category_id: "0XDs3dDagImeGAgrWZe9",
            Product_image: "vanila.jpg?alt=media&token=8a8e2d40-9f18-46ed-b56a-9fd64a553e24",
            Product_name:"Vanila Chocolate"
          }],
        Isdata : true
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
        expect(component.find(Button)).toHaveLength(2)
    })

})
