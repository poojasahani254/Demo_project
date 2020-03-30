import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Product from './index'

const props={
  data:{
    "id":"123",
    "price":"150",
    "description":"This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
  },
  handleClick: action('On click Button of Add to Cart'),
}
storiesOf('Product Item', module)
  .add('Product Item Component', () => (
    <Product {...props} />
  ))
