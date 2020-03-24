import React from 'react'
import { storiesOf } from '@storybook/react'
import { BaseLayoutComponent } from '.'

storiesOf('Layouts/Base', module).add('basic', () => (
  <BaseLayoutComponent>this is Layout component</BaseLayoutComponent>
))
