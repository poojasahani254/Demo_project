import React from 'react'
import { shallow } from 'enzyme'
import Renderer from 'react-test-renderer'
import { TextField, Button, Avatar } from '@material-ui/core'
import Login from './signIn'
const setup = () =>{
    const props = {
        handleChange: ()=>{},
        handleSubmit: ()=>{},
        handleFacebookLogin: ()=>{},
        handleGoogleLogin: ()=>{},
      }

  const component = shallow(<Login {...props} />)
  const instance = component.instance()
  const tree = Renderer.create(
      <Login {...props} />
  ).toJSON()
  return {
    tree,  
    props,
    component,
    instance
  }
}

describe('Sign In Component',()=>{
    it('Snapshot', () => {
        const { tree } = setup()
        expect(tree).toMatchSnapshot()
      })
    it('Should Render Child Component Correctly',()=>{
        const { component } = setup()
        expect(component.find(TextField)).toHaveLength(2)
        // expect(component.find(Avatar)).toHaveLength(2)
        expect(component.find(Button)).toHaveLength(1)
    })
    it('should work onChange of login input',()=>{
        const {component } = setup()
        const loginInput = component.find('#email')
        expect(loginInput).toHaveLength(1)
        loginInput.simulate('change', { target: { value: 'xyz@gmail.com' } })
    })
    it('should work onChange of password input',()=>{
        const {component,instance} = setup()
        const loginInput = component.find('#password')
        expect(loginInput).toHaveLength(1)
        loginInput.simulate('change', { target: { value: 'password' } })
        expect(instance).toEqual(null)
    })
})