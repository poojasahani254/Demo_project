import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
import Login from './signIn'
 const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

storiesOf('Login Page', module)
  .add('Login Component', () => (
    <Login />
  ))
