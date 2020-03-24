// NOTE: importing react because of jest
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Layout from '../../src/Components/layout/base'
import '../../src/app.css'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})
const req = require.context('../../src/Components', true, /stories\.js$/)
console.log("req",req)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

const BaseLayoutDecorator = storyFn => (
      <Layout>{storyFn()}</Layout>
)

addDecorator(BaseLayoutDecorator)
